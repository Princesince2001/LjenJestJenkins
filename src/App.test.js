import { render, screen } from "@testing-library/react";
import App from "./App";

describe("My calculator Tescases", () => {
  test("Test My name", () => {
    render(<App />);
    var testcase1 = screen.getByText("Hello Keerthivasan");
    expect(testcase1).toBeInTheDocument();
  });

  test("Test calculator", () => {
    render(<App />);
    var testcase2 = screen.getByText("Simple calculator program");
    expect(testcase2).toBeInTheDocument();
  });

  test("Test the field one", () => {
    render(<App />);
    const testcase3 = screen.getByTestId("Fieldone");
    expect(testcase3).toBeInTheDocument();
    expect(testcase3).toHaveTextContent("enter the number1");
  });

  test("Test the field two", () => {
    render(<App />);
    const testcase4 = screen.getByTestId("Fieldtwo");
    expect(testcase4).toBeInTheDocument();
    expect(testcase4).toHaveTextContent("enter the number2");
  });

  test("Test the field three", () => {
    render(<App />);
    const testcase5 = screen.getByTestId("Fieldthree");
    expect(testcase5).toBeInTheDocument();
    expect(testcase5).toHaveTextContent("enter the number3");
  });

  test("Test textbox one", () => {
    render(<App />);
    const testcase6 = screen.getByTestId("textone");
    expect(testcase6).toBeInTheDocument();
  });

  test("Text box two", () => {
    render(<App />);
    const testcase6 = screen.getByTestId("texttwo");
    expect(testcase6).toBeInTheDocument();
  });

  test("text box 3", () => {
    render(<App />);
    const textcase7 = screen.getByTestId("textthree");
    expect(textcase7).toBeInTheDocument();
  });

  test("button 1", () => {
    render(<App />);
    const textcase8 = screen.getByTestId("buttontest");
    expect(textcase8).toBeInTheDocument();
  });
});
