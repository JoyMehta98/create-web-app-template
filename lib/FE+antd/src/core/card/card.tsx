import { Card as AntdCard, CardProps } from "antd";

const Card = (props: CardProps) => (
  <AntdCard
  {...props}
  >
    {children}
  </AntdCard>
);

export default Card;
