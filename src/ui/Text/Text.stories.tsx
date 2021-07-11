import { Meta, Story } from "@storybook/react";

import { Text } from "./Text";
import css from "./Text.module.scss";
import { TextProps } from "./Text.type";

export default {
  title: "UI/Text",
  component: Text,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<TextProps> = (args) => (
  <div className={css.Story}>
    <Text {...args} />
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
