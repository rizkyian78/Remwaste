export interface SkipResponse {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
