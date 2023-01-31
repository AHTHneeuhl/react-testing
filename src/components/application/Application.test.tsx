import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const namePlaceholderElement = screen.getByPlaceholderText("Fullname");
    expect(namePlaceholderElement).toBeInTheDocument();

    const nameLabelElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameLabelElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsLabelElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsLabelElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory!");
    expect(paragraphElement).toBeInTheDocument();

    const nameValueElement = screen.getByDisplayValue("Bruce Wayne");
    expect(nameValueElement).toBeInTheDocument();

    const imageAltElement = screen.getByAltText("a person with laptop");
    expect(imageAltElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();
  });
});
