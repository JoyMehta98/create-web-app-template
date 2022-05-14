import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import { ROUTE_PATH } from "routes";
import texts from "locales/properties.json";
import AddProperties from ".";

const renderComponent = () => Render(<AddProperties />);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ state: { name: "test" }, pathname: "test-path" }),
  useNavigate: () => mockNavigate
}));

describe("add properties card tab", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("card-tab")).toBeInTheDocument();
  });
  it("add properties page open current activeTab basic information ", () => {
    renderComponent();

    const currentActiveTab = screen.getByRole(texts.tab, { selected: true });

    expect(currentActiveTab).toBeInTheDocument();
    expect(screen.getByRole(texts.tab, { selected: true })).toHaveTextContent(
      texts.basicInformation
    );
  });
  it("clicked on facilities tab ", () => {
    renderComponent();

    const currentTab = screen.getByRole(texts.tab, { selected: true });

    expect(currentTab).toHaveTextContent(texts.basicInformation);

    const tab = screen.getByRole(texts.tab, { name: texts.facilities });

    fireEvent.click(tab);

    expect(screen.getByRole(texts.tab, { selected: true })).toHaveTextContent(
      texts.facilities
    );
  });
  it("clicked on room information tab ", () => {
    renderComponent();

    const currentTab = screen.getByRole(texts.tab, { selected: true });

    expect(currentTab).toHaveTextContent(texts.basicInformation);

    const tab = screen.getByRole(texts.tab, { name: texts.roomInformation });

    fireEvent.click(tab);

    expect(screen.getByRole(texts.tab, { selected: true })).toHaveTextContent(
      texts.roomInformation
    );
  });
  it("clicked on gallery tab ", () => {
    renderComponent();

    const currentTab = screen.getByRole(texts.tab, { selected: true });

    expect(currentTab).toHaveTextContent(texts.basicInformation);

    const tab = screen.getByRole(texts.tab, { name: texts.gallery });

    fireEvent.click(tab);

    expect(screen.getByRole(texts.tab, { selected: true })).toHaveTextContent(
      texts.gallery
    );
  });
  it("clicked on policy information tab ", () => {
    renderComponent();

    const currentTab = screen.getByRole(texts.tab, { selected: true });

    expect(currentTab).toHaveTextContent(texts.basicInformation);

    const tab = screen.getByRole(texts.tab, { name: texts.policyInformation });

    fireEvent.click(tab);

    expect(screen.getByRole(texts.tab, { selected: true })).toHaveTextContent(
      texts.policyInformation
    );
  });

  it("close button click redirects properties page", () => {
    renderComponent();

    const closeBtn = screen.getByTestId("close-btn");
    expect(closeBtn).toBeInTheDocument();

    fireEvent.click(closeBtn);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.properties);
  });
});
