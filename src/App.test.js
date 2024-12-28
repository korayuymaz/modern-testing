import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";

// function TestComponent({ products }) {
//   return (
//     <div>
//       <label for="user-name">User Name:</label>
//       <input id="user-name" placeholder="Enter Your User Name" />
//       <button>Test</button>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>{product}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function TestComponentTwo({ suffix }) {
//   return <div>{suffix ? suffix : "Suffix not exist"}</div>;
// }

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

// it("should render the element correctly", () => {
//   const products = ["product1", "product2", "product3"];
//   render(<TestComponent products={products} />);
//   const listItems = screen.getAllByRole("listitem");
//   const buttonElement = screen.getByRole("button", {
//     name: "Test",
//   }); //Role used for HTML Elements tag names and role names may differ
//   const labelElement = screen.getByLabelText("User Name:");
//   const inputElement = screen.getByPlaceholderText("Enter Your User Name");

//   expect(labelElement).toBeInTheDocument();
//   expect(inputElement).toBeInTheDocument();
//   expect(buttonElement).toBeInTheDocument();
//   expect(listItems).toHaveLength(products.length);
// });

// it("should render the second test element correctly", () => {
//   render(<TestComponentTwo suffix={"Test"} />);
//   const element = screen.getByText("Test");
//   const emptyElement = screen.queryByText("Suffix not exist"); // If the element does not exist query is used
//   expect(emptyElement).not.toBeInTheDocument();
//   expect(element).toBeInTheDocument();
//   // const element = screen.getByText("Hello", {
//   //   exact: false,
//   // });
//   // expect(element).toBeInTheDocument();
// });

it("should render the third test correctly", async () => {
  render(<TestComponentAsync />);
  const element = await screen.findByText(/Second/i);
  expect(element).toBeInTheDocument();
});
