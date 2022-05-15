import { screen, render } from "@testing-library/react";
import Dashboard from ".";

const renderComponent = () => render(<Dashboard />);

describe("Dashboard", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
  });
});
