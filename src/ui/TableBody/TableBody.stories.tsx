import { Meta, Story } from "@storybook/react";

import { TableBody } from "./TableBody";
import css from "./TableBody.module.scss";
import { TableBodyProps } from "./TableBody.type";

export default {
  title: "UI/TableBody",
  component: TableBody,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<TableBodyProps> = (args) => (
  <div className={css.Story}>
    <TableBody {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {
  rows: [
    [1, "Eric", 999],
    [2, "Kyle", 32],
    [3, "Stan", 31],
    [4, "Kenny", 12]
  ]
};

Default.parameters = {
  docs: {
    storyDescription: "Story description"
  }
};

export { Default };
