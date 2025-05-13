import React from "react";
import { render, screen } from "@testing-library/react";
import AlertDanger from "../AlertDanger";

describe("AlertDanger", () => {
  it("renders danger message correctly", () => {
    render(<AlertDanger />);
    expect(
      screen.getByText("Not Suitable for Heavy Waste")
    ).toBeInTheDocument();
  });

  it("renders with danger icon", () => {
    const { container } = render(<AlertDanger />);
    const icon = container.querySelector(".text-red-500");
    expect(icon).toBeInTheDocument();
  });
});
