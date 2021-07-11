import { render } from "@testing-library/react";

import { Game } from "./Game";

describe("<Game />", () => {
  const Component = <Game />;

  it("should be defined", () => {
    expect(Game).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
