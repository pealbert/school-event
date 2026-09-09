const SummaryItem = ({ block, program }) => {
	return (
		<div
			className={`grid min-w-0 gap-1 rounded-xl border p-3.5 ${
				program
					? "border-[#4d73b7] text-white"
					: "border-[#5d5d5d] border-dashed text-[#aaa]"
			}`}
		>
			<span className="font-bold text-[0.72rem] uppercase tracking-[0.08em]">
				Blok {block}
			</span>
			<strong className="wrap-anywhere">
				{program ? `${program.title} · ${program.room}` : "Zatím nevybráno"}
			</strong>
		</div>
	);
};

export const Registration = ({
	isComplete,
	onReset,
	onSubmit,
	selectedPrograms,
	status,
}) => {
	return (
		<section
			aria-labelledby="registration-title"
			className="grid scroll-mt-16 grid-cols-1 items-start gap-8 border-line border-t py-[52px] min-[480px]:scroll-mt-18 min-[900px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[900px]:gap-[clamp(48px,7vw,96px)] min-[1240px]:py-28 min-[480px]:py-16 min-[900px]:py-22"
			id="registrace"
		>
			<div>
				<p className="mb-3 font-extrabold text-[0.72rem] text-brand-blue uppercase tracking-[0.12em]">
					Registrace
				</p>
				<h2
					className="mb-4 font-bold font-heading text-[clamp(1.75rem,8vw,2.4rem)] leading-[1.08] tracking-[-0.04em] min-[1240px]:text-[3.6rem] min-[480px]:text-[clamp(2rem,6vw,3rem)]"
					id="registration-title"
				>
					Tvůj výběr
				</h2>
				<p className="text-muted">
					Nezadáváš jméno, e-mail ani jiné osobní údaje.
				</p>
			</div>
			<form
				className="min-w-0 rounded-[14px] bg-ink p-5 text-white shadow-card min-[480px]:rounded-[18px] min-[480px]:p-6 min-[900px]:p-8"
				onSubmit={onSubmit}
			>
				<div aria-live="polite" className="grid gap-3">
					<SummaryItem block={1} program={selectedPrograms[1]} />
					<SummaryItem block={2} program={selectedPrograms[2]} />
				</div>
				<p className="my-5 text-[#bdbdbd] text-sm">
					Data se ukládají jen lokálně jako anonymní ID programů.
				</p>
				<div className="flex flex-col items-stretch gap-2.5 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-[18px]">
					<button
						className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-blue px-5 font-bold text-white transition hover:bg-brand-blue-dark disabled:bg-[#aaa7a0] motion-safe:hover:-translate-y-0.5 min-[480px]:w-auto"
						disabled={!isComplete}
						type="submit"
					>
						Potvrdit výběr
					</button>
					<button
						className="min-h-11 border-0 bg-transparent px-0 py-2 text-center font-bold text-white underline underline-offset-4 disabled:text-[#777] min-[480px]:text-left"
						disabled={!selectedPrograms[1] && !selectedPrograms[2]}
						onClick={onReset}
						type="button"
					>
						Vymazat výběr
					</button>
				</div>
				<p
					className="wrap-anywhere mt-4 min-h-[1.55em] font-semibold text-[#83e0b7]"
					role="status"
				>
					{status}
				</p>
			</form>
		</section>
	);
};
