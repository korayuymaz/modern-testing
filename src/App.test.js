import React from "react";
import { render, renderHook, screen, act } from "@testing-library/react";
import { customRender } from "./test-utils";

function useCustomHook() {
  const [name, setName] = React.useState("John Doe");
  const changeName = (newName) => setName(newName);

  return { name, changeName };
}

it("should render TestComponent", async () => {
  const { result } = renderHook(useCustomHook);

  expect(result.current.name).toBe("John Doe");

  act(() => {
    result.current.changeName("Jane Doe");
  });

  expect(result.current.name).toBe("Jane Doe");
});
