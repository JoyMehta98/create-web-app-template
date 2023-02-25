import { Button as AntdButton, ButtonProps } from "antd";

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <AntdButton {...rest}>{children}</AntdButton>;
};
