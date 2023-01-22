import { HTMLProps, ReactNode } from "react";
import { BrandColor, Shape, Size } from "./helpers";

// @see https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const optionClasses = {
	brandColor: {
		primary: "btn-primary",
		secondary: "btn-secondary",
		accent: "btn-accent",
		ghost: "btn-ghost",
		info: "btn-info",
		success: "btn-success",
		warning: "btn-warning",
		error: "btn-error",
	},
	size: {
		lg: "btn-lg",
		sm: "btn-sm",
		xs: "btn-xs",
	},
	shape: {
		square: "btn-square",
		circle: "btn-circle",
	},
};

const booleanClasses = {
	link: "btn-link",
	active: "btn-active",
	outline: "btn-outline",
	responsive: "btn-responsive",
	wide: "btn-wide",
	glass: "btn-glass",
	block: "btn-block",
};

type BaseButtonProps = HTMLProps<HTMLButtonElement> & {
	type?: "button" | "submit" | "reset" | undefined;
	children: ReactNode;
};

type ButtonClassNameProps = {
	className?: string;
	brandColor?: BrandColor;
	size?: Size;
	shape?: Shape;
	link?: boolean;
	active?: boolean;
	outline?: boolean;
	responsive?: boolean;
	wide?: boolean;
	glass?: boolean;
	block?: boolean;
};

const getNewClassName = (props: ButtonClassNameProps) => {
	const classNameArray = props?.className?.split(" ") ?? [];
	classNameArray.push("btn");

	Object.keys(optionClasses).forEach((option) => {
		const optionClass = optionClasses[option as keyof typeof optionClasses];
		const optionProp = props[option as keyof typeof optionClasses];
		if (optionProp) {
			classNameArray.push(optionClass[optionProp as keyof typeof optionClass]);
		}
	});

	Object.keys(booleanClasses).forEach((booleanClass) => {
		const booleanProp = props[booleanClass as keyof typeof booleanClasses];
		if (booleanProp) {
			classNameArray.push(
				booleanClasses[booleanClass as keyof typeof booleanClasses]
			);
		}
	});

	return classNameArray.join(" ");
};

export type ButtonProps = BaseButtonProps & ButtonClassNameProps;

export const Button = ({
	children = "Button",
	className,
	brandColor,
	size,
	shape,
	link,
	active,
	outline,
	responsive,
	wide,
	glass,
	block,
	...props
}: ButtonProps) => {
	return (
		<button
			className={getNewClassName({
				className,
				brandColor,
				size,
				shape,
				link,
				active,
				outline,
				responsive,
				wide,
				glass,
				block,
			})}
			{...props}
		>
			{children}
		</button>
	);
};
