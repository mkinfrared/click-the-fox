import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import { Game } from "./Game";
import css from "./Game.module.scss";
import { GameProps } from "./Game.type";

export default {
  title: "COMPONENTS/Game",
  component: Game,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<GameProps> = (args) => (
  <div className={css.Story}>
    <Game {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {
  onTimeout: action("Timeout")
};

Default.parameters = {
  docs: {
    storyDescription: "Story description"
  }
};

export { Default };
