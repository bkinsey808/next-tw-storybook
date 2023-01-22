export const BRAND_COLOR = {
	primary: "Primary",
	secondary: "Secondary",
	accent: "Accent",
	ghost: "Ghost",
	info: "Info",
	success: "Success",
	warning: "Warning",
	error: "Error",
};

export type BrandColor = keyof typeof BRAND_COLOR;

export const SIZE = {
	lg: "Large",
	sm: "Small",
	xs: "Extra Small",
};

export type Size = keyof typeof SIZE;

export const SHAPE = {
	circle: "Circle",
	square: "Square",
};

export type Shape = keyof typeof SHAPE;
