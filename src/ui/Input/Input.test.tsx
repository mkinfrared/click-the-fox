import { render } from "@testing-library/react";

import { Input } from "./Input";

describe("<Input />", () => {
  const Component = <Input />;

  it("should be defined", () => {
    expect(Input).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
