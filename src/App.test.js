import React from "react";
import { render } from "@testing-library/react";

class DatabaseClient {
  constructor() {
    this.users = [];
  }

  initialize() {
    this.users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
  }

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  reset() {
    this.users = [];
  }
}

describe("DatabaseClient", () => {
  let client;
  beforeEach(() => {
    client = new DatabaseClient();
    client.initialize();
  });

  afterEach(() => {
    console.log("after each test");
  });

  it("should initialize with two users", () => {
    expect(client.getUsers()).toHaveLength(2);
  });

  it("should delete a user", () => {
    client.deleteUser(1);
    expect(client.getUsers()).toHaveLength(1);
  });

  it("should get a user by id", () => {
    client.initialize();
    expect(client.getUser(1)).toEqual({ id: 1, name: "Alice" });
  });
});
