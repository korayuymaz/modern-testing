import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { MOCK_POSTS } from "./mocks";

jest.mock("./useFetch.js", () => {
  return {
    useFetch: () => ({
      isLoading: false,
      data: MOCK_POSTS,
    }),
  };
});

describe("App", () => {
  it("should render a loading message", () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(MOCK_POSTS.length);
  });
});
