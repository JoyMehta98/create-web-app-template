import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import AdminUserSearch from ".";

const renderComponent = () => Render(<AdminUserSearch />);

describe("Admin User Search", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("admin-user-search")).toBeInTheDocument();
  });
});
