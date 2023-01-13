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

export const World = (args: any) => (
  <Button className="btn" {...args}>
    Hey!
  </Button>
);
