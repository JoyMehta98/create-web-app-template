import { render, screen } from "@testing-library/react";
import RoomInfo from ".";

const renderComponent = () => render(<RoomInfo />);

describe("RoomInformation", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("room-info")).toBeInTheDocument();
    expect(screen.getByTestId("room-info-table")).toBeInTheDocument();
  });
});
