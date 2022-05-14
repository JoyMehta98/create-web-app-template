import { screen } from "@testing-library/react";
import Render from "testUtils/render";
import SearchNotification from ".";

const renderComponent = () => Render(<SearchNotification />);
describe("Search Notifications", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("search-notifications")).toBeInTheDocument();
  });
});
