import { Link } from "react-router-dom";
import { PageContainer } from "@/components/PageContainer";

export const NotFound = () => {
	return (
		<div className="flex min-h-svh flex-col">
			<header className="min-h-16 border-line/80 border-b min-[480px]:min-h-18">
				<PageContainer className="flex min-h-[inherit] items-center">
					<Link
						aria-label="Studentský den — úvod"
						className="font-bold font-heading text-[0.72rem] tracking-[0.08em] no-underline min-[480px]:text-[0.82rem] min-[700px]:text-sm min-[480px]:tracking-widest min-[700px]:tracking-[0.12em]"
						to="/"
					>
						STUDENTSKÝ DEN
					</Link>
				</PageContainer>
			</header>

			<PageContainer
				as="main"
				className="flex flex-1 items-center py-14 min-[480px]:py-20"
			>
				<div className="max-w-190">
					<p className="mb-4 font-extrabold text-[0.72rem] text-brand-blue uppercase tracking-[0.12em]">
						Chyba 404
					</p>
					<h1 className="mb-5 font-bold font-heading text-[clamp(2.5rem,10vw,6.5rem)] leading-[1.02] tracking-[-0.045em]">
						Tahle stránka
						<br />
						<span className="bg-linear-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
							není v programu.
						</span>
					</h1>
					<p className="mb-8 max-w-145 text-base text-muted min-[480px]:text-lg">
						Odkaz může být neaktuální nebo stránka už neexistuje. Vrať se na{" "}
						úvod a vyber si program.
					</p>
					<Link
						className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-blue px-5 font-bold text-white no-underline transition hover:bg-brand-blue-dark motion-safe:hover:-translate-y-0.5"
						to="/"
					>
						Zpět na úvod
					</Link>
				</div>
			</PageContainer>

			<PageContainer as="footer">
				<div className="border-line border-t py-7 text-[0.82rem] text-muted">
					Studentský den
				</div>
			</PageContainer>
		</div>
	);
};
