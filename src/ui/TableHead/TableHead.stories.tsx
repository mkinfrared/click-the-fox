import { Meta, Story } from "@storybook/react";

import { TableHead } from "./TableHead";
import css from "./TableHead.module.scss";
import { TableHeadProps } from "./TableHead.type";

export default {
  title: "UI/TableHead",
  component: TableHead,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<TableHeadProps> = (args) => (
  <div className={css.Story}>
    <TableHead {...args} />
  </div>
);

const Default = Template.bind({});

Default.args = {
  headers: ["Foo", "Bar", "Foobar", "Marklar"]
};

Default.parameters = {
  docs: {
    storyDescription: "Story description"
  }
};

export { Default };
