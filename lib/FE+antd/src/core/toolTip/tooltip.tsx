import { Tooltip as AntdTooltip, TooltipProps } from "antd";

const ToolTip = (props: TooltipProps) => (
    <AntdTooltip
     {...props}
    >
      {props.children}
    </AntdTooltip>
);

export default ToolTip;
