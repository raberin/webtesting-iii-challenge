// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
  //Snapshot test
  it("matches the snapshot", () => {
    const tree = renderer.create(<Dashboard />); //Generates the tree

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
