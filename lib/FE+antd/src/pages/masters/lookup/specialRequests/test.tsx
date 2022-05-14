import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import SpecialRequests from "./SpecialRequests";

const renderComponent = () => Render(<SpecialRequests />);

describe("SpecialRequests", () => {
  it("renders component", () => {
    renderComponent();

    expect(
      screen.getByTestId("special-requests-container")
    ).toBeInTheDocument();
    expect(screen.getByTestId("special-requests-card")).toBeInTheDocument();
    expect(screen.getByTestId("special-requests-table")).toBeInTheDocument();
  });
  it("opens add special requests model", () => {
    renderComponent();

    const addSpecialRequests = screen.getByTestId("add-special-requests");
    fireEvent.click(addSpecialRequests);

    expect(addSpecialRequests).toBeInTheDocument();
    expect(screen.getByTestId("special-requests-modal")).toBeInTheDocument();
  });
});
