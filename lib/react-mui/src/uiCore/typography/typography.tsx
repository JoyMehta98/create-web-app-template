import { Typography as MuiTypography, TypographyProps } from "@mui/material";

export const Typography = ({
  children,
  variant,
  className,
}: TypographyProps) => (
  <MuiTypography component="span" variant={variant} className={className}>
    {children}
  </MuiTypography>
);
