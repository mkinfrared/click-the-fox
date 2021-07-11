import { render } from "@testing-library/react";

import { Scores } from "./Scores";

describe("<Scores />", () => {
  const Component = <Scores />;

  it("should be defined", () => {
    expect(Scores).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
