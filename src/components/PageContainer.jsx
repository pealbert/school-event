import { cn } from "@/lib/utils";

const containerClasses =
	"mx-auto w-full max-w-[1320px] px-5 min-[480px]:px-6 min-[700px]:px-8 min-[900px]:px-12 min-[1240px]:px-[60px]";

export const PageContainer = ({
	as: Element = "div",
	className = "",
	...props
}) => {
	return <Element className={cn(containerClasses, className)} {...props} />;
};
