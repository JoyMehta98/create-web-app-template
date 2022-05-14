import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Facilities from ".";

const renderComponent = () => Render(<Facilities />);

describe("Facilities", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("facilities")).toBeInTheDocument();
  });
});
