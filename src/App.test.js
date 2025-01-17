import React from "react";
import { renderHook, act } from "@testing-library/react";

function useCustomHook() {
  const [name, setName] = React.useState("John Doe");
  const changeName = (newName) => setName(newName);

  return { name, changeName };
}

it("should return correctly before and after calling hook function", async () => {
  const { result } = renderHook(useCustomHook);

  expect(result.current.name).toBe("John Doe");

  act(() => {
    result.current.changeName("Jane Doe");
  });

  expect(result.current.name).toBe("Jane Doe");
});
