export const ProgramCard = ({ isSelected, onSelect, program }) => {
	return (
		<article className="flex min-w-0 flex-col rounded-[14px] border border-line bg-white p-5 shadow-transparent transition hover:border-[#b3aea4] hover:shadow-card motion-safe:hover:-translate-y-0.5 min-[1240px]:min-h-[340px] min-[700px]:min-h-80 min-[480px]:rounded-[18px] min-[1240px]:p-9 min-[480px]:p-6 min-[900px]:p-8">
			<div className="mb-5 flex min-w-0 flex-wrap items-center justify-between gap-3 font-bold text-[0.72rem] text-muted uppercase tracking-[0.07em]">
				<span>{program.type}</span>
				<span>
					{program.blocks.map((block) => `Blok ${block}`).join(" + ")}
				</span>
			</div>
			<h3 className="wrap-anywhere mb-3 font-bold font-heading text-[clamp(1.25rem,6vw,1.55rem)] leading-[1.18] tracking-[-0.025em] min-[1240px]:text-[1.65rem]">
				{program.title}
			</h3>
			<p className="wrap-anywhere mb-6 text-muted">{program.description}</p>
			<div className="mt-auto flex min-w-0 flex-col items-stretch justify-between gap-3 min-[480px]:flex-row min-[480px]:items-center">
				<span className="font-bold text-sm">Místnost {program.room}</span>
				<button
					aria-pressed={isSelected}
					className={`min-h-11 w-full rounded-[10px] border px-4 py-2.5 font-bold transition min-[480px]:w-auto min-[480px]:min-w-26 ${
						isSelected
							? "border-brand-blue bg-brand-blue text-white"
							: "border-line bg-transparent text-ink hover:border-brand-blue hover:bg-brand-blue hover:text-white"
					}`}
					onClick={() => onSelect(program)}
					type="button"
				>
					{isSelected ? "Vybráno" : "Vybrat"}
				</button>
			</div>
		</article>
	);
};
