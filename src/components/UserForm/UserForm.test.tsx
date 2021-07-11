import { render } from "@testing-library/react";

import { UserForm } from "./UserForm";

describe("<UserForm />", () => {
  const Component = <UserForm />;

  it("should be defined", () => {
    expect(UserForm).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
