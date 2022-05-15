import { Button as AntdButton, ButtonProps } from "antd";

const Button = (props: ButtonProps) => (
  <AntdButton {...props}>{children}</AntdButton>
);

export default Button;
