import { Meta, Story } from "@storybook/react";

import { GameController } from "./GameController";
import css from "./GameController.module.scss";

export default {
  title: "COMPONENTS/GameController",
  component: GameController,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story = () => (
  <div className={css.Story}>
    <GameController />
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
