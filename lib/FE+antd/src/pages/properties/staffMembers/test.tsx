import { screen } from "@testing-library/react";
import Render from "testUtils/render";
import StaffMembers from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ state: { name: "test" }, pathname: "test-path" })
}));

const renderComponent = () => Render(<StaffMembers />);
describe("StaffMembers", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("staff-members")).toBeInTheDocument();
  });
});
