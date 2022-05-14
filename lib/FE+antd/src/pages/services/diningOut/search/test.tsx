import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import SearchRestaurants from ".";

const renderComponent = () => Render(<SearchRestaurants />);

describe("Restaurant Search", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("search-restaurant")).toBeInTheDocument();
  });
});
