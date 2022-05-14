import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import CheckoutOptions from "./CheckOutOptions";

const renderComponent = () => Render(<CheckoutOptions />);

describe("CheckoutOptions", () => {
  it("renders component", () => {
    renderComponent();

    expect(
      screen.getByTestId("checkout-options-container")
    ).toBeInTheDocument();
    expect(screen.getByTestId("checkout-options-card")).toBeInTheDocument();
    expect(screen.getByTestId("checkout-options-table")).toBeInTheDocument();
  });

  it("opens add checkout options model", () => {
    renderComponent();

    const addCheckOutOptions = screen.getByTestId("add-checkout-options");
    fireEvent.click(addCheckOutOptions);

    expect(addCheckOutOptions).toBeInTheDocument();
    expect(screen.getByTestId("checkout-options-modal")).toBeInTheDocument();
  });
});
