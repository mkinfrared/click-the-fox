import { Meta, Story } from "@storybook/react";

import { Heading } from "./Heading";
import { HeadingProps } from "./Heading.type";

export default {
  title: "UI/Heading",
  component: Heading
} as Meta;

const Template: Story<HeadingProps> = () => (
  <>
    <Heading variant="h1">Heading 1</Heading>
    <Heading variant="h2">Heading 2</Heading>
    <Heading variant="h3">Heading 3</Heading>
    <Heading variant="h4">Heading 4</Heading>
    <Heading variant="h5">Heading 5</Heading>
    <Heading variant="h6">Heading 6</Heading>
  </>
);

const Default = Template.bind({}) as Story<HeadingProps>;

export { Default };
