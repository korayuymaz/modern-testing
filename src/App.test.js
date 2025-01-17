import React, { useState } from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

function TestComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

it("should render the correct number after user event", async () => {
  const user = userEvent.setup();
  render(<TestComponent />);
  await user.pointer({
    keys: "[MouseLeft]",
    target: screen.getByRole("button", { name: "Increment" }),
  });

  const headingElement = await screen.findByRole("heading");

  expect(headingElement).toHaveTextContent("1");
});
