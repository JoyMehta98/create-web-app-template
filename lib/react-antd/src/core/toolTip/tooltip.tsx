import { Tooltip as AntdTooltip, TooltipProps } from "antd";

export const ToolTip = (props: TooltipProps) => {
  const { children, ...rest } = props;

  return <AntdTooltip {...rest}>{children}</AntdTooltip>;
};
