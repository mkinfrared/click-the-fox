import { Meta, Story } from "@storybook/react";

import { Table } from "./Table";
import css from "./Table.module.scss";
import { TableProps } from "./Table.type";

export default {
  title: "UI/Table",
  component: Table,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<TableProps> = (args) => (
  <div className={css.Story}>
    <Table {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {
  rows: [
    [1, "Eric", 999],
    [2, "Kyle", 32],
    [3, "Stan", 31],
    [4, "Kenny", 12]
  ],
  headers: ["Rank", "Name", "Score"]
};

Default.parameters = {
  docs: {
    storyDescription: "Story description"
  }
};

export { Default };
