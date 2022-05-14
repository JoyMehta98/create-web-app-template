import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Search from ".";

const renderComponent = () => Render(<Search />);

describe("Amenities Search", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("search-amenities")).toBeInTheDocument();
  });
});
