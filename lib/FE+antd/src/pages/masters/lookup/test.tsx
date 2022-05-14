import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Lookup from ".";

const renderComponent = () => Render(<Lookup />);

describe("Lookup", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("lookup")).toBeInTheDocument();
  });
});
