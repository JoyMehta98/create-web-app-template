import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import UserTable from ".";

const renderComponent = () => Render(<UserTable />);

describe("User Table", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("users-card")).toBeInTheDocument();
    expect(screen.getByTestId("user-table")).toBeInTheDocument();
  });
  it("opens add user model", () => {
    renderComponent();

    const addUser = screen.getByTestId("add-user");
    fireEvent.click(addUser);

    expect(addUser).toBeInTheDocument();
    expect(screen.getByTestId("user-modal")).toBeInTheDocument();
  });
});
