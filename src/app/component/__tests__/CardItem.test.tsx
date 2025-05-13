import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardItem from "../CardItem";
import { SkipResponse } from "@/app/model/Waste";

describe("CardItem", () => {
  const mockSkipData: SkipResponse = {
    id: 1,
    size: 4,
    hire_period_days: 7,
    transport_cost: 50,
    per_tonne_cost: 100,
    price_before_vat: 200,
    vat: 20,
    postcode: "NR32",
    area: "Lowestoft",
    forbidden: false,
    created_at: "2024-03-20T00:00:00Z",
    updated_at: "2024-03-20T00:00:00Z",
    allowed_on_road: true,
    allows_heavy_waste: true,
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders skip information correctly", () => {
    render(
      <CardItem data={mockSkipData} id={undefined} onClick={mockOnClick} />
    );

    // Check if basic information is displayed
    expect(screen.getByText(/4 Yards Skip/)).toBeInTheDocument();
    expect(screen.getByText(/£200/)).toBeInTheDocument();
    expect(screen.getByText(/7 day hire period/)).toBeInTheDocument();
  });

  it("shows warning when not allowed on road", () => {
    const notAllowedOnRoad = { ...mockSkipData, allowed_on_road: false };
    render(
      <CardItem data={notAllowedOnRoad} id={undefined} onClick={mockOnClick} />
    );

    expect(screen.getByText(/Not Allowed On The Road/i)).toBeInTheDocument();
  });

  it("shows danger alert when heavy waste not allowed", () => {
    const noHeavyWaste = { ...mockSkipData, allows_heavy_waste: false };
    render(
      <CardItem data={noHeavyWaste} id={undefined} onClick={mockOnClick} />
    );

    expect(
      screen.getByText(/Not Suitable for Heavy Waste/)
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(
      <CardItem data={mockSkipData} id={undefined} onClick={mockOnClick} />
    );

    const cardElement = screen.getByText(/4 Yards Skip/).closest("div");
    fireEvent.click(cardElement!);

    expect(mockOnClick).toHaveBeenCalledWith(mockSkipData);
  });

  it("shows selected state when id matches", () => {
    render(<CardItem data={mockSkipData} id={1} onClick={mockOnClick} />);

    expect(screen.getByText("Selected")).toBeInTheDocument();
  });
});
