import { Card as AntdCard, CardProps } from "antd";

export const Card = (props: CardProps) => {
  const { children, ...rest } = props;

  return <AntdCard {...rest}>{children}</AntdCard>;
};
