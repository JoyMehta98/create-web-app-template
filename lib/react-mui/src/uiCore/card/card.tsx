import { ReactNode } from "react";
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
  CardProps,
} from "@mui/material";
import { Divider } from "uiCore";
import { useStyle } from "./style";

interface Props extends CardProps {
  extra?: ReactNode;
  divider?: boolean;
  subHeader?: string;
  footer?: ReactNode;
}

export const Card = ({
  variant,
  children,
  className,
  title,
  extra,
  divider,
  subHeader,
  footer,
}: Props) => {
  const classes = useStyle();

  return (
    <MuiCard
      title={title}
      className={`${className} ${classes.root}`}
      variant={variant}
    >
      {title && (
        <CardHeader action={extra} title={title} subheader={subHeader} />
      )}
      {divider && <Divider />}
      <CardContent className={classes.cardContent}>{children}</CardContent>
      {footer && <CardActions>{footer}</CardActions>}
    </MuiCard>
  );
};
