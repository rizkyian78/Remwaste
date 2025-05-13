import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { SkipResponse } from "@/app/model/Waste";

describe("Footer", () => {
  const mockData: SkipResponse = {
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

  it("renders skip size correctly", () => {
    render(<Footer data={mockData} />);
    // Get the first instance of the text since it appears in both mobile and desktop views
    expect(screen.getAllByText(/4 Yard Skip/)[0]).toBeInTheDocument();
  });

  it("displays calculated VAT price", () => {
    render(<Footer data={mockData} />);
    // Price should be 240 (200 + 20% VAT)
    expect(screen.getAllByText(/£240/)[0]).toBeInTheDocument();
  });

  it("shows hire period", () => {
    render(<Footer data={mockData} />);
    // Get the first instance of the hire period text
    expect(screen.getAllByText(/7 days?/)[0]).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Footer data={mockData} />);
    expect(screen.getAllByText("Back")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Continue")[0]).toBeInTheDocument();
  });

  it("displays VAT percentage", () => {
    render(<Footer data={mockData} />);
    // Get the first instance of the VAT percentage
    expect(screen.getAllByText(/Included VAT \(20\) %/)[0]).toBeInTheDocument();
  });
});
