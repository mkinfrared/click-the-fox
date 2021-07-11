import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import { Button } from "./Button";
import { ButtonProps } from "./Button.type";

export default {
  title: "UI/Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} onClick={action("Click")}>
      I am a button
    </Button>
  </>
);

const Default = Template.bind({}) as Story<ButtonProps>;

export { Default };
