import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";

export const Tooltip = ({ children, title, placement }: TooltipProps) => (
  <MuiTooltip title={title} arrow placement={placement}>
    {children}
  </MuiTooltip>
);
