import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import { ROUTE_PATH } from "routes";
import texts from "locales/common.json";
import Properties from ".";

const renderComponent = () => Render(<Properties />);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

describe("Properties", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("properties")).toBeInTheDocument();
    expect(screen.getByTestId("properties-table")).toBeInTheDocument();
  });
  it("add property button click redirects add-properties page", () => {
    renderComponent();

    const addProperty = screen.getByTestId("add-property");
    expect(addProperty).toBeInTheDocument();

    fireEvent.click(addProperty);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.addProperties, {
      state: { name: texts.add }
    });
  });
});
