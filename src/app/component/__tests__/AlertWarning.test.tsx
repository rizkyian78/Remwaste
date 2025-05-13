import React from "react";
import { render, screen } from "@testing-library/react";
import AlertWarning from "../AlertWarning";

describe("AlertWarning", () => {
  it("renders warning message correctly", () => {
    render(<AlertWarning />);
    expect(screen.getByText(/Not Allowed On The Road/i)).toBeInTheDocument();
  });

  it("renders with warning icon", () => {
    const { container } = render(<AlertWarning />);
    const icon = container.querySelector(".text-yellow-500");
    expect(icon).toBeInTheDocument();
  });
});
