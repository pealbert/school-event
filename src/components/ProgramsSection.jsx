import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const filters = [
	{ label: "Vše", value: "all" },
	{ label: "Blok 1", value: "1" },
	{ label: "Blok 2", value: "2" },
];

export const ProgramsSection = ({
	activeFilter,
	onFilter,
	onSelect,
	programs,
	selection,
}) => {
	const visiblePrograms = programs.filter(
		(program) =>
			activeFilter === "all" || program.blocks.includes(Number(activeFilter)),
	);

	return (
		<section
			aria-labelledby="programs-title"
			className="scroll-mt-16 py-13 min-[480px]:scroll-mt-18 min-[1240px]:py-28 min-[480px]:py-16 min-[900px]:py-22"
			id="programy"
		>
			<div className="mb-7 flex flex-col items-start gap-4.5 min-[700px]:flex-row min-[700px]:items-end min-[700px]:justify-between min-[700px]:gap-6">
				<SectionHeading
					eyebrow="Nabídka"
					id="programs-title"
					title="Programy"
				/>
				<fieldset className="flex w-full flex-wrap gap-2 min-[700px]:w-auto">
					<legend className="sr-only">Filtrovat programy</legend>
					{filters.map((filter) => {
						const isActive = activeFilter === filter.value;

						return (
							<button
								aria-pressed={isActive}
								className={cn(
									"min-h-11 rounded-full border px-5 font-bold transition",
									isActive
										? "border-ink bg-ink text-white"
										: "border-line bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
								)}
								key={filter.value}
								onClick={() => onFilter(filter.value)}
								type="button"
							>
								{filter.label}
							</button>
						);
					})}
				</fieldset>
			</div>
			<div className="grid grid-cols-1 gap-4 min-[1240px]:grid-cols-3 min-[700px]:grid-cols-2 min-[700px]:gap-4.5">
				{visiblePrograms.map((program) => (
					<ProgramCard
						isSelected={selection.includes(program.id)}
						key={program.id}
						onSelect={onSelect}
						program={program}
					/>
				))}
			</div>
		</section>
	);
};
