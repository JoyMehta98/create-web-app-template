import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import PolicyInfo from ".";

const renderComponent = () => Render(<PolicyInfo />);

describe("Policy Information", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("policy-information")).toBeInTheDocument();
  });
});
