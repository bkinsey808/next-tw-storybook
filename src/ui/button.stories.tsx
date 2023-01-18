import { Story } from "@storybook/react";
import { Button } from "./button";

export default {
	title: "Hello",
	component: Button,
	argTypes: {
		"data-theme": {
			control: {
				type: "select",
				options: ["light", "dark"],
			},
		},
	},
};



export const World<Story<ButtonProps>> = (args) => (
	<Button className="btn" {...args}>
		Hey!
	</Button>
);
