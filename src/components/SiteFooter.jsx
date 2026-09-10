import { PageContainer } from "@/components/PageContainer";

export const SiteFooter = () => {
	return (
		<PageContainer as="footer">
			<div className="flex flex-col items-start gap-2 border-line border-t py-7 text-[0.82rem] text-muted min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-6">
				<span>Studentský den</span>
				<span>{new Date().getFullYear()} &copy; Všechna práva vyhrazena.</span>
			</div>
		</PageContainer>
	);
};
