export const Hero = () => {
	return (
		<section
			aria-labelledby="hero-title"
			className="relative grid min-h-[max(500px,calc(100svh-64px))] scroll-mt-16 content-center items-start justify-items-start overflow-hidden py-13 min-[1240px]:min-h-[min(800px,calc(100svh-72px))] min-[480px]:min-h-[max(540px,calc(100svh-72px))] min-[480px]:scroll-mt-18 min-[1240px]:py-28 min-[480px]:py-16 min-[900px]:py-22"
			id="top"
		>
			<p className="mb-3 font-extrabold text-[0.72rem] text-brand-blue uppercase tracking-[0.12em]">
				Vzdělávací akce pro studenty
			</p>
			<h1
				className="wrap-anywhere mb-5 max-w-225 font-bold font-heading text-[clamp(2.05rem,10.5vw,3rem)] leading-[1.02] tracking-[-0.035em] min-[1240px]:text-[clamp(5rem,7vw,6.5rem)] min-[480px]:text-[clamp(2.8rem,9vw,4.4rem)]"
				id="hero-title"
			>
				Vyber si dva programy.
				<br />
				<span className="bg-linear-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
					Bez účtu a bez osobních údajů.
				</span>
			</h1>
			<p className="mb-7 max-w-165 text-base text-muted min-[1240px]:text-xl">
				Toto je ukázka registračního webu. Výběr zůstává pouze v tomto
				prohlížeči a nikam se neodesílá.
			</p>
			<a
				className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-blue px-5 font-bold text-white no-underline transition hover:bg-brand-blue-dark motion-safe:hover:-translate-y-0.5"
				href="#programy"
			>
				Prohlédnout program
			</a>
		</section>
	);
};
