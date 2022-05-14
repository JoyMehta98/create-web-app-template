import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import AdminUsersTable from ".";

const renderComponent = () => Render(<AdminUsersTable />);

describe("Admin Users Table", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("admin-users-card")).toBeInTheDocument();
    expect(screen.getByTestId("admin-users-table")).toBeInTheDocument();
  });
  it("opens admin user model", () => {
    renderComponent();

    const addAdminUser = screen.getByTestId("add-admin-user");
    fireEvent.click(addAdminUser);

    expect(addAdminUser).toBeInTheDocument();
    expect(screen.getByTestId("admin-user-modal")).toBeInTheDocument();
  });
});
