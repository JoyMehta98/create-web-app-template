import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import StaffMemberTable from ".";

const renderComponent = () => Render(<StaffMemberTable />);

describe("Staff Member Table", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("staff-members-card")).toBeInTheDocument();
    expect(screen.getByTestId("staff-members-table")).toBeInTheDocument();
  });
  it("opens staff member model", () => {
    renderComponent();

    const addStaffMember = screen.getByTestId("add-staff-member");
    fireEvent.click(addStaffMember);

    expect(addStaffMember).toBeInTheDocument();
    expect(screen.getByTestId("staff-member-modal")).toBeInTheDocument();
  });
});
