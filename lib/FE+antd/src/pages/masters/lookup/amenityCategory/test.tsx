import { fireEvent, screen } from "@testing-library/dom";
import Render from "testUtils/render";
import AmenityCategory from "./AmenityCategory";

const renderComponent = () => Render(<AmenityCategory />);

describe("AmenityCategory", () => {
  it("renders component", () => {
    renderComponent();

    expect(screen.getByTestId("amenity-container")).toBeInTheDocument();
    expect(screen.getByTestId("amenity-category-card")).toBeInTheDocument();
    expect(screen.getByTestId("amenity-category-table")).toBeInTheDocument();
  });
  it("opens add amenity category model", () => {
    renderComponent();

    const addAmenityCategory = screen.getByTestId("add-amenity-category");
    fireEvent.click(addAmenityCategory);

    expect(addAmenityCategory).toBeInTheDocument();
    expect(screen.getByTestId("amenity-category-modal")).toBeInTheDocument();
  });
});
