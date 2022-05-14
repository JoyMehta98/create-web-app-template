import { screen } from "@testing-library/react";
import Render from "testUtils/render";
import AdminUsers from ".";

const renderComponent = () => Render(<AdminUsers />);
describe("AdminUsers", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("admin-users")).toBeInTheDocument();
  });
});
