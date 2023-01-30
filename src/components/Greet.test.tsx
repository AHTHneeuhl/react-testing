import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with name", () => {
  render(<Greet name="Arya" />);
  const textElement = screen.getByText("Hello Arya");
  expect(textElement).toBeInTheDocument();
});
