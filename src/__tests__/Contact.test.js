import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact us Test Cases", () => {
  test("Should load contact us page", () => {
    //render
    render(<Contact />);

    //querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button in contact component ", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 Text Box in contact component ", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    //Assertion
    expect(input.length).toBe(2);
  });
});
