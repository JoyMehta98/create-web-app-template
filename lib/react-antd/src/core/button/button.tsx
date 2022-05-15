import { Button as AntdButton, ButtonProps } from "antd";

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <AntdButton {...rest}>{children}</AntdButton>;
};

export default Button;
