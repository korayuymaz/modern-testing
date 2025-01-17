import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";

function TestComponentAsync() {
  const [message, setMessage] = useState("First Message");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Second Message");
    }, [300]);
  }, []);
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

it("should render the second message correctly", async () => {
  render(<TestComponentAsync />);
  const element = await screen.findByText(/Second/i);
  expect(element).toBeInTheDocument();
});
