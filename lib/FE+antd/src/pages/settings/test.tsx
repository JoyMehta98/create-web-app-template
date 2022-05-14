import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Settings from ".";

const renderComponent = () => Render(<Settings />);

describe("Settings", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("settings-card")).toBeInTheDocument();
    expect(screen.getByTestId("settings-table")).toBeInTheDocument();
  });
});
