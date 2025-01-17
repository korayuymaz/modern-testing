import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "./test-utils";

function TestComponent() {
  return (
    <div>
      <p>TestComponent</p>
    </div>
  );
}

it("should render TestComponent", async () => {
  customRender(<TestComponent />);
  expect(screen.getByText("TestComponent")).toBeInTheDocument();
});
