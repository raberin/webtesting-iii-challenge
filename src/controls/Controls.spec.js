// Test away!
import React from "react";
// import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import Dashboard from "../dashboard/Dashboard";

describe("<Controls/>", () => {
  it("should toggle Lock and Unlock Gates", () => {
    const { getByText } = render(<Dashboard />);

    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);

    getByText(/unlock gate/i);
    getByText(/locked/i);

    const unlockButton = getByText(/unlock gate/i);

    fireEvent.click(unlockButton);
    getByText(/lock gate/i);
  });

  it("should toggle open and close gates", () => {
    const { getByText } = render(<Dashboard />);

    const closeButton = getByText(/close gate/i);

    fireEvent.click(closeButton);

    getByText(/open gate/i);

    const openButton = getByText(/open gate/i);

    fireEvent.click(openButton);

    getByText(/close gate/i);
  });

  it("lock gate is disabled if close gate btn not pressed", () => {
    const { getByText } = render(<Dashboard />);

    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    expect(lockButton).toBeDisabled();
  });

  it("open gate button is disabled when everything is locked", () => {
    const { getByText } = render(<Dashboard />);

    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);

    expect(getByText(/open gate/i)).toBeDisabled();
  });
});
