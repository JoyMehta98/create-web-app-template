import { Card as AntdCard, CardProps } from "antd";

const Card = (props: CardProps) => {
  const { children, ...rest } = props;

  return <AntdCard {...rest}>{children}</AntdCard>;
};

export default Card;
