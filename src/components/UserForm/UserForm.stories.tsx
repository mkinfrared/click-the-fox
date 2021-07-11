import { Meta, Story } from "@storybook/react";

import { UserForm } from "./UserForm";
import css from "./UserForm.module.scss";
import { UserFormProps } from "./UserForm.type";

export default {
  title: "COMPONENTS/UserForm",
  component: UserForm,
  parameters: {
    componentSubtitle: "Subtitle goes here"
  }
} as Meta;

const Template: Story<UserFormProps> = (args) => (
  <div className={css.Story}>
    <UserForm {...args} />
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
