// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
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
    getByText(/unlocked/i);

    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);

    getByText(/locked/i);
  });
});
