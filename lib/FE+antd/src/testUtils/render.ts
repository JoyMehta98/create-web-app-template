import { render as RTLRender } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

const Render = (component: ReactElement) =>
  RTLRender(component, { wrapper: MemoryRouter });

export default Render;
