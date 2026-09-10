const steps = [
	"Vyber program pro první blok",
	"Vyber program pro druhý blok",
	"Potvrď výběr",
];

export const Schedule = () => {
	return (
		<section
			aria-labelledby="schedule-title"
			className="grid grid-cols-1 gap-8 border-line border-y py-13 min-[900px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[900px]:gap-[clamp(48px,7vw,96px)] min-[1240px]:py-28 min-[480px]:py-16 min-[900px]:py-22"
		>
			<div>
				<p className="mb-3 font-extrabold text-[0.72rem] text-brand-blue uppercase tracking-[0.12em]">
					Jak to funguje
				</p>
				<h2
					className="wrap-anywhere mb-4 font-bold font-heading text-[clamp(1.75rem,8vw,2.4rem)] leading-[1.08] tracking-[-0.04em] min-[1240px]:text-[3.6rem] min-[480px]:text-[clamp(2rem,6vw,3rem)]"
					id="schedule-title"
				>
					Dva bloky, jedna volba pro každý
				</h2>
			</div>
			<ol className="grid list-none gap-3 p-0">
				{steps.map((step, index) => (
					<li
						className="flex min-w-0 items-center gap-3 rounded-xl bg-white p-3.5"
						key={step}
					>
						<strong className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white">
							{index + 1}
						</strong>
						<span className="wrap-anywhere min-w-0">{step}</span>
					</li>
				))}
			</ol>
		</section>
	);
};
