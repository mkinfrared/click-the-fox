import { render } from "@testing-library/react";

import { TableBody } from "./TableBody";

describe("<TableBody />", () => {
  const Component = <TableBody />;

  it("should be defined", () => {
    expect(TableBody).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
