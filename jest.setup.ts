import "@testing-library/jest-dom";
import React from "react";
import { ImageProps } from "next/image";

// Mock next/image since it's not available in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: function Image(props: Partial<ImageProps>) {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement("img", { ...props });
  },
}));
