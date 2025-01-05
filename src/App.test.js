import React, { useState, useEffect } from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

function TestComponent() {
  const [message, setMessage] = useState("First");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Second");
    }, 300);
  }, []);
  return (
    <div>
      <p className="primary-text">{message}</p>
    </div>
  );
}

it("should render the third test correctly", async () => {
  const { container } = render(<TestComponent />);
  // const elementExist = await screen.findByText(/Second/i);
  // const elementShouldNotExist = screen.queryByText("First");
  // expect(elementExist).toBeInTheDocument();
  // expect(elementShouldNotExist).not.toBeInTheDocument();

  const element = container.querySelector(".primary-text");

  expect(element).toBeInTheDocument();
});
