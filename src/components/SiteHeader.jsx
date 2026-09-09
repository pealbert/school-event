import { PageContainer } from "@/components/PageContainer";

const primaryButton =
	"inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-brand-blue px-3.5 text-sm font-bold text-white no-underline transition hover:bg-brand-blue-dark min-[480px]:px-5 min-[480px]:text-base motion-safe:hover:-translate-y-0.5";

export const SiteHeader = () => {
	return (
		<header className="sticky top-0 z-10 min-h-16 w-full border-line/80 border-b bg-paper/95 backdrop-blur-md min-[480px]:min-h-18">
			<PageContainer className="flex min-h-[inherit] items-center justify-between gap-3">
				<a
					aria-label="Studentský den — úvod"
					className="min-w-0 font-bold font-heading text-[0.72rem] leading-[1.15] tracking-[0.08em] no-underline min-[480px]:text-[0.82rem] min-[700px]:text-sm min-[480px]:tracking-[0.1em] min-[700px]:tracking-[0.12em]"
					href="#top"
				>
					STUDENTSKÝ DEN
				</a>
				<nav
					aria-label="Hlavní navigace"
					className="flex min-w-0 items-center gap-3"
				>
					<a
						className="hidden no-underline min-[700px]:inline"
						href="#programy"
					>
						Programy
					</a>
					<a className={primaryButton} href="#registrace">
						Registrace
					</a>
				</nav>
			</PageContainer>
		</header>
	);
};
