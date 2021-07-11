import { Meta, Story } from "@storybook/react";

import { Scores } from "./Scores";
import css from "./Scores.module.scss";
import { ScoresProps } from "./Scores.type";

export default {
  title: "COMPONENTS/Scores",
  component: Scores,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<ScoresProps> = (args) => (
  <div className={css.Story}>
    <Scores {...args} />
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
