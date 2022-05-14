import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Bookings from ".";

const renderComponent = () => Render(<Bookings />);

describe("Bookings", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("bookings")).toBeInTheDocument();
  });
});
