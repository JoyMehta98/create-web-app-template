import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";

const Tooltip = ({ children, title, placement }: TooltipProps) => (
  <MuiTooltip title={title} arrow placement={placement}>
    {children}
  </MuiTooltip>
);

export default Tooltip;
