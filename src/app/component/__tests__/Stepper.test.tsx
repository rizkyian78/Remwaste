import React from "react";
import { render, screen } from "@testing-library/react";
import Stepper from "../Stepper";

describe("Stepper", () => {
  it("renders all steps", () => {
    render(<Stepper step={1} />);
    expect(screen.getByText("Postcode")).toBeInTheDocument();
    expect(screen.getByText("Waste Type")).toBeInTheDocument();
    expect(screen.getByText("Select Skip")).toBeInTheDocument();
    expect(screen.getByText("Permit Check")).toBeInTheDocument();
    expect(screen.getByText("Choose Date")).toBeInTheDocument();
    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("highlights current step", () => {
    const currentStep = 3;
    render(<Stepper step={currentStep} />);

    // Get all step buttons and verify the current one is highlighted
    const steps = screen.getAllByRole("button");
    expect(steps[currentStep - 1]).toHaveClass("text-[#0037C1]");
  });

  it("shows completed steps differently", () => {
    const currentStep = 3;
    render(<Stepper step={currentStep} />);

    // Previous steps should be marked as completed
    const steps = screen.getAllByRole("button");
    for (let i = 0; i < currentStep - 1; i++) {
      expect(steps[i]).toHaveClass("text-[#0037C1]");
    }
  });

  it("shows upcoming steps as inactive", () => {
    const currentStep = 3;
    render(<Stepper step={currentStep} />);

    // Future steps should be marked as inactive
    const steps = screen.getAllByRole("button");
    for (let i = currentStep; i < steps.length; i++) {
      expect(steps[i]).toHaveClass("text-white/60");
      expect(steps[i]).toBeDisabled();
    }
  });
});
