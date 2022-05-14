import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Dashboard from ".";

const renderComponent = () => Render(<Dashboard />);

describe("Dashboard", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
  });
});
