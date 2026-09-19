export const SectionHeading = ({ description, eyebrow, id, title }) => {
	return (
		<div>
			<p className="mb-3 font-extrabold text-[0.72rem] text-brand-blue uppercase tracking-[0.12em]">
				{eyebrow}
			</p>
			<h2
				className="wrap-anywhere mb-4 font-bold font-heading text-[clamp(1.75rem,8vw,2.4rem)] leading-[1.08] tracking-[-0.04em] min-[1240px]:text-[3.6rem] min-[480px]:text-[clamp(2rem,6vw,3rem)]"
				id={id}
			>
				{title}
			</h2>
			{description && <p className="text-muted">{description}</p>}
		</div>
	);
};
