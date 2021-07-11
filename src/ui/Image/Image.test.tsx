import { fireEvent, render } from "@testing-library/react";

import { Image } from "./Image";

describe("<Image />", () => {
  const loadHeight = 42;
  const loadWidth = 47;
  const src = "marklar";
  const props = { loadHeight, loadWidth, src };
  const Component = <Image {...props} />;

  beforeAll(() => {
    (global.IntersectionObserver as any) = jest.fn(() => ({
      constructor: jest.fn().mockReturnThis(),

      disconnect: jest.fn(),

      observe: jest.fn(),

      takeRecords: jest.fn(),

      unobserve: jest.fn()
    }));
  });

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should load image and remove placeholder", () => {
    const { container } = render(Component);
    const image = container.querySelector("img");
    const placeholder = container.querySelector("svg");

    expect(placeholder).toBeInTheDocument();

    fireEvent(image!, new Event("load"));

    expect(placeholder).not.toBeInTheDocument();
  });

  it("should fail image, remove placeholder and image and display failure block", async () => {
    const { container, findByText } = render(Component);
    const image = container.querySelector("img");
    const placeholder = container.querySelector("svg");

    expect(placeholder).toBeInTheDocument();

    fireEvent(image!, new Event("error"));

    const failed = await findByText("Failed to load content");

    expect(image).not.toBeInTheDocument();

    expect(placeholder).not.toBeInTheDocument();

    expect(failed).toBeInTheDocument();
  });
});
