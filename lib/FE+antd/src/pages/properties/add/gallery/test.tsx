import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Gallery from ".";

const renderComponent = () => Render(<Gallery />);

describe("Gallery", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("gallery")).toBeInTheDocument();
  });
});
