import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  it("renders with name", () => {
    render(<Greet name="Arya" />);
    const textElement = screen.getByText("Hello Arya");
    expect(textElement).toBeInTheDocument();
  });
});
