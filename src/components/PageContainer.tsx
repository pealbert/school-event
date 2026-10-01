import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const containerClasses =
	"mx-auto w-full max-w-[1320px] px-5 min-[480px]:px-6 min-[700px]:px-8 min-[900px]:px-12 min-[1240px]:px-[60px]";

type PageContainerProps<T extends ElementType> = {
	as?: T;
	className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export const PageContainer = <T extends ElementType = "div">({
	as,
	className = "",
	...props
}: PageContainerProps<T>) => {
	const Element = as ?? "div";

	return <Element className={cn(containerClasses, className)} {...props} />;
};
