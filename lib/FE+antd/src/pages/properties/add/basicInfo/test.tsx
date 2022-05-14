import { screen } from "@testing-library/dom";
import Render from "testUtils/render";
import BasicInfo from ".";

const renderComponent = () => Render(<BasicInfo />);

describe("Basic Information", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("basic-information")).toBeInTheDocument();
  });
});
