import { render, screen } from "@testing-library/react";
import CommonHeader from ".";

const renderComponent = () => render(<CommonHeader />);

describe("CommonHeader", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("common-header")).toBeInTheDocument();
  });
});
