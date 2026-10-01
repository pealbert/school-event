import { type SubmitEventHandler, useState } from "react";
import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { ProgramsSection } from "@/components/ProgramsSection";
import { Registration } from "@/components/Registration";
import { Schedule } from "@/components/Schedule";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { programs } from "@/data/programs";
import type { Program, ProgramFilter, SelectedPrograms } from "@/types";

const STORAGE_KEY = "event-registration-selection-v1";

const isProgramId = (value: unknown): value is string =>
	typeof value === "string" && programs.some(({ id }) => id === value);

const loadSelection = (): string[] => {
	try {
		const savedValue: unknown = JSON.parse(
			localStorage.getItem(STORAGE_KEY) ?? "null",
		);
		if (!Array.isArray(savedValue)) return [];

		return savedValue
			.filter(isProgramId)
			.reduce<string[]>((validSelection, id) => {
				const program = programs.find((item) => item.id === id);
				const overlapsExistingBlock = program?.blocks.some((block) =>
					validSelection.some((selectedId) =>
						programs
							.find((item) => item.id === selectedId)
							?.blocks.includes(block),
					),
				);

				if (program && !overlapsExistingBlock) validSelection.push(id);
				return validSelection;
			}, []);
	} catch {
		return [];
	}
};

const saveSelection = (selection: readonly string[]): boolean => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
		return true;
	} catch {
		return false;
	}
};

const clearSelection = () => {
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch {
		// The in-memory selection still works when browser storage is unavailable.
	}
};

export const Home = () => {
	const [activeFilter, setActiveFilter] = useState<ProgramFilter>("all");
	const [selection, setSelection] = useState<string[]>(loadSelection);
	const [status, setStatus] = useState("");

	const selectedPrograms: SelectedPrograms = {
		1: programs.find(
			(program) => selection.includes(program.id) && program.blocks.includes(1),
		),
		2: programs.find(
			(program) => selection.includes(program.id) && program.blocks.includes(2),
		),
	};
	const isComplete = Boolean(selectedPrograms[1] && selectedPrograms[2]);

	const handleSelect = (program: Program) => {
		setSelection((currentSelection) => {
			const nextSelection = currentSelection.filter((selectedId) => {
				const selectedProgram = programs.find(({ id }) => id === selectedId);
				return (
					selectedProgram &&
					!selectedProgram.blocks.some((block) =>
						program.blocks.includes(block),
					)
				);
			});

			const updatedSelection = currentSelection.includes(program.id)
				? nextSelection
				: [...nextSelection, program.id];
			saveSelection(updatedSelection);
			return updatedSelection;
		});
		setStatus("");
	};

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		if (!isComplete) {
			setStatus("Nejdříve vyber jeden program pro každý blok.");
			return;
		}

		setStatus(
			saveSelection(selection)
				? "Výběr je uložený v tomto prohlížeči. Žádná data nebyla odeslána."
				: "Výběr je potvrzený pro tuto relaci. Úložiště prohlížeče není dostupné.",
		);
	};

	const handleReset = () => {
		setSelection([]);
		clearSelection();
		setStatus("Výběr byl vymazán.");
	};

	return (
		<>
			<a
				className="fixed top-3 left-3 z-20 translate-y-[-160%] bg-ink px-3.5 py-2.5 text-white focus:translate-y-0"
				href="#main"
			>
				Přejít na obsah
			</a>
			<SiteHeader />
			<PageContainer as="main" id="main">
				<Hero />
				<Schedule />
				<ProgramsSection
					activeFilter={activeFilter}
					onFilter={setActiveFilter}
					onSelect={handleSelect}
					programs={programs}
					selection={selection}
				/>
				<Registration
					isComplete={isComplete}
					onReset={handleReset}
					onSubmit={handleSubmit}
					selectedPrograms={selectedPrograms}
					status={status}
				/>
			</PageContainer>
			<SiteFooter />
		</>
	);
};
