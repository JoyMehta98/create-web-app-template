import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import Amenities from ".";

const renderComponent = () => Render(<Amenities />);

describe("Amenities", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("amenity-card")).toBeInTheDocument();
    expect(screen.getByTestId("amenity-table")).toBeInTheDocument();
  });
  it("amenity model", () => {
    renderComponent();

    const addAmenity = screen.getByTestId("add-amenity");
    fireEvent.click(addAmenity);

    expect(addAmenity).toBeInTheDocument();
    expect(screen.getByTestId("amenity-modal")).toBeInTheDocument();
  });
});
