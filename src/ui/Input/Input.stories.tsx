import { Meta, Story } from "@storybook/react";

import { Input } from "./Input";
import css from "./Input.module.scss";
import { InputProps } from "./Input.type";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<InputProps> = (args) => (
  <div className={css.Story}>
    <Input {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  docs: {
    storyDescription: "Story description"
  }
};

export { Default };
