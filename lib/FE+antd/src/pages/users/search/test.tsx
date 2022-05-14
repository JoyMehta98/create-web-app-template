import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import UserSearch from ".";

const renderComponent = () => Render(<UserSearch />);

describe("User Search", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("user-search")).toBeInTheDocument();
  });
});
