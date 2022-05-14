import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import StaffMemberSearch from ".";

const renderComponent = () => Render(<StaffMemberSearch />);

describe("Staff Member Search", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("staff-member-search")).toBeInTheDocument();
  });
});
