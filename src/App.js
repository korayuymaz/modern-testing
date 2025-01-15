import React from "react";
import { useFetch } from "./useFetch.js";

function App() {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
