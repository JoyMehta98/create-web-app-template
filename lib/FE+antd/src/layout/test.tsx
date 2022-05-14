import { screen, fireEvent } from "@testing-library/react";
import { mocked } from "jest-mock";
import Render from "testUtils/render";
import Layout from "layout";
import { ROUTE_PATH } from "routes";
import useUpdateDimensions from "hooks/useUpdateDimensions";

const mockNavigate = jest.fn();

const renderComponent = () =>
  Render(
    <Layout>
      <div data-testid="layout-children" />
    </Layout>
  );

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));
jest.mock("hooks/useUpdateDimensions");

describe("Layout", () => {
  mocked(useUpdateDimensions).mockReturnValue({
    isResponsive: false,
    deviceWidth: 1080
  });

  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("layout-main-content")).toBeInTheDocument();
    expect(screen.getByTestId("layout-children")).toBeInTheDocument();
  });

  it("redirects to dashboard when clicked on logo", () => {
    renderComponent();

    const layoutLogo = screen.getByTestId("layout-logo");
    expect(layoutLogo).toBeInTheDocument();

    fireEvent.click(layoutLogo);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.dashboard);
  });

  it("collapse should be false when clicked on main content and device width is more than 992", () => {
    renderComponent();

    const layoutContent = screen.getByTestId("layout-main-content");
    const layoutLogo = screen.getByTestId("layout-logo");

    expect(layoutLogo).toHaveClass("layout-main-logo");
    expect(layoutContent).toBeInTheDocument();

    fireEvent.click(layoutContent);

    expect(layoutLogo).toHaveClass("layout-main-logo");
  });

  it("set collapse to true when clicked on main content and device width is less than 992", () => {
    mocked(useUpdateDimensions).mockReturnValueOnce({
      isResponsive: false,
      deviceWidth: 700
    });

    renderComponent();
    const layoutContent = screen.getByTestId("layout-main-content");
    const layoutLogo = screen.getByTestId("layout-logo");

    expect(layoutLogo).toHaveClass("layout-main-logo");
    expect(layoutContent).toBeInTheDocument();

    fireEvent.click(layoutContent);

    expect(layoutLogo).toHaveClass("collapsed-logo");
  });
});
