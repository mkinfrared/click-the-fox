import { render } from "@testing-library/react";

import { TableHead } from "./TableHead";

describe("<TableHead />", () => {
  const Component = <TableHead />;

  it("should be defined", () => {
    expect(TableHead).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
