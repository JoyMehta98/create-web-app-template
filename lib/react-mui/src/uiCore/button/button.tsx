import { Button as MuiButton, ButtonProps } from "@mui/material";
import { useStyles } from "./style";

export const Button = ({
  variant,
  onClick,
  children,
  disabled,
  className,
  type,
  color,
}: ButtonProps) => {
  const classes = useStyles();

  return (
    <MuiButton
      className={`${className} ${classes.root}`}
      color={color}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      disableRipple
      type={type}
    >
      {children}
    </MuiButton>
  );
};
