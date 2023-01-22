import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@/ui/Button";
import { BRAND_COLOR, SIZE } from "@/ui/helpers";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<ButtonProps> = {
	title: "Example/Button",
	component: Button,
	argTypes: {
		brandColor: {
			options: [...Object.keys(BRAND_COLOR), undefined],
			control: {
				type: "select",
			},
		},
		size: {
			options: [...Object.keys(SIZE), undefined],
			control: {
				type: "select",
			},
		},
		children: {
			control: "text",
		},
		disabled: {
			control: {
				type: "boolean",
			},
		},
		active: {
			control: {
				type: "boolean",
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
	args: {},
};

// import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from "./Button";

// // More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
// const meta: Meta<typeof Button> = {
// 	title: "Example/Button",
// 	component: Button,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		backgroundColor: {
// 			control: "color",
// 		},
// 	},
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// // More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
// export const Primary: Story = {
// 	args: {
// 		primary: true,
// 		label: "Button",
// 	},
// };

// export const Secondary: Story = {
// 	args: {
// 		label: "Button",
// 	},
// };

// export const Large: Story = {
// 	args: {
// 		size: "large",
// 		label: "Button",
// 	},
// };

// export const Small: Story = {
// 	args: {
// 		size: "small",
// 		label: "Button",
// 	},
// };
