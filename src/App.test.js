import React, { useState, useEffect } from "react";
import { waitFor, render, screen } from "@testing-library/react";

function TestComponent() {
  const [message, setMessage] = useState("First");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Second");
    }, [300]);
  }, []);
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

it("should render the third test correctly", async () => {
  render(<TestComponent />);
  // const elementExist = await screen.findByText(/Second/i);
  // const elementShouldNotExist = screen.queryByText("First");
  // expect(elementExist).toBeInTheDocument();
  // expect(elementShouldNotExist).not.toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText("Second")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.queryByText("First")).not.toBeInTheDocument();
  });
});
