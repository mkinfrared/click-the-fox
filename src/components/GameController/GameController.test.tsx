import { render } from "@testing-library/react";

import { GameController } from "./GameController";

describe("<GameController />", () => {
  const Component = <GameController />;

  it("should be defined", () => {
    expect(GameController).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
