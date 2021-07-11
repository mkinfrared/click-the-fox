import { render } from "@testing-library/react";

import { ImagePlaceholder } from "./ImagePlaceholder";

describe("<ImagePlaceholder />", () => {
  const Component = ImagePlaceholder;
  const height = 42;
  const width = 47;
  const props = { height, width };

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });
});
