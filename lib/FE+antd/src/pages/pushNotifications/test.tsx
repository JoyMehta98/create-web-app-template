import { fireEvent, screen } from "@testing-library/react";
import Render from "testUtils/render";
import { ROUTE_PATH } from "routes";
import texts from "locales/common.json";
import PushNotifications from ".";

const renderComponent = () => Render(<PushNotifications />);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

describe("PushNotifications", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("push-notifications")).toBeInTheDocument();
    expect(screen.getByTestId("push-notifications-table")).toBeInTheDocument();
  });
  it("add push notifications button click redirects add-push-notifications page", () => {
    renderComponent();

    const addPushNotifications = screen.getByTestId("add-push-notifications");
    expect(addPushNotifications).toBeInTheDocument();

    fireEvent.click(addPushNotifications);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.addPushNotifications, {
      state: { name: texts.add }
    });
  });
});
