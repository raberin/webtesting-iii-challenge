// Test away!
import React from "react";
// import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import Dashboard from "../dashboard/Dashboard";

describe("<Display/>", () => {
  it("displays open and closed", () => {
    const { getByText } = render(<Dashboard />);

    //Tests if door is open
    getByText(/open/i);

    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);

    //Test if door is closed
    getByText(/closed/i);
  });

  it("displays locked and unlocked", () => {
    const { getByText } = render(<Dashboard />);

    //Tests if door is unlocked
    expect(getByText(/unlocked/i)).toHaveClass("green-led");

    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    //Tests if door is locked
    expect(getByText(/locked/i)).toHaveClass("red-led");
  });
});
