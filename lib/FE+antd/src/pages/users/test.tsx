import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Users from ".";

const renderComponent = () => Render(<Users />);

describe("Users", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("users")).toBeInTheDocument();
  });
});
