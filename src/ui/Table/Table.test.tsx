import { render } from "@testing-library/react";

import { Table } from "./Table";

describe("<Table />", () => {
  const Component = <Table />;

  it("should be defined", () => {
    expect(Table).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
