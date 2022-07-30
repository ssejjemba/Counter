import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  test("renders app component successfully", () => {
    render(<App />);
    const container = screen.getByTestId("application_container");
    expect(container).toBeInTheDocument();
  });

  test("The heading contains the right initial state count", () => {
    render(<App />);
    const counterDisplay = screen.getByTestId("counter_display");
    expect(counterDisplay).toBeInTheDocument();

    expect(counterDisplay.textContent).toBe("The counter is 0");
  });

  test("The increase button increases the counter", () => {
    render(<App />);
    const increaseButton = screen.getByTestId("increment_button");
    expect(increaseButton).toBeInTheDocument();

    fireEvent.mouseEnter(increaseButton);

    const counterDisplay = screen.getByTestId("counter_display");
    expect(counterDisplay).toBeInTheDocument();

    expect(counterDisplay.textContent).toBe("The counter is 1");
  });

  test("The decrease count button decreases the counter", () => {
    render(<App />);
    const decrementButton = screen.getByTestId("decrement_button");
    expect(decrementButton).toBeInTheDocument();

    fireEvent.mouseEnter(decrementButton);

    const counterDisplay = screen.getByTestId("counter_display");
    expect(counterDisplay).toBeInTheDocument();

    expect(counterDisplay.textContent).toBe("The counter is -1");
  });
});
