import { Tooltip as AntdTooltip, TooltipProps } from "antd";

const ToolTip = (props: TooltipProps) => {
  const { children, ...rest } = props;

  return <AntdTooltip {...rest}>{children}</AntdTooltip>;
};

export default ToolTip;
