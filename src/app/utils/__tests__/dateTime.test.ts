import { formatWeeksAndDays } from "../dateTime";

// Mock dayjs
jest.mock("dayjs", () => jest.fn());

describe("formatWeeksAndDays", () => {
  let mockDayjs: jest.Mock;

  beforeEach(() => {
    mockDayjs = jest.requireMock("dayjs");
    mockDayjs.mockReset();
  });

  it("formats single week correctly", () => {
    const mockStart = { diff: () => 7 };
    const mockEnd = { diff: () => 7 };
    mockDayjs.mockReturnValueOnce(mockStart).mockReturnValueOnce(mockEnd);

    const result = formatWeeksAndDays();
    expect(result).toBe("1 week");
  });

  it("formats multiple weeks correctly", () => {
    const mockStart = { diff: () => 14 };
    const mockEnd = { diff: () => 14 };
    mockDayjs.mockReturnValueOnce(mockStart).mockReturnValueOnce(mockEnd);

    const result = formatWeeksAndDays();
    expect(result).toBe("2 weeks");
  });

  it("formats days only correctly", () => {
    const mockStart = { diff: () => 2 };
    const mockEnd = { diff: () => 2 };
    mockDayjs.mockReturnValueOnce(mockStart).mockReturnValueOnce(mockEnd);

    const result = formatWeeksAndDays();
    expect(result).toBe("2 days");
  });

  it("formats weeks and days correctly", () => {
    const mockStart = { diff: () => 9 };
    const mockEnd = { diff: () => 9 };
    mockDayjs.mockReturnValueOnce(mockStart).mockReturnValueOnce(mockEnd);

    const result = formatWeeksAndDays();
    expect(result).toBe("1 week, 2 days");
  });

  it("formats multiple weeks and days correctly", () => {
    const mockStart = { diff: () => 16 };
    const mockEnd = { diff: () => 16 };
    mockDayjs.mockReturnValueOnce(mockStart).mockReturnValueOnce(mockEnd);

    const result = formatWeeksAndDays();
    expect(result).toBe("2 weeks, 2 days");
  });
});
