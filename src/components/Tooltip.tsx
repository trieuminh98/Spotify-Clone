import { Tooltip as ATooltip, TooltipProps as ATooltipProps } from 'antd';

type TooltipProps = ATooltipProps & {};

const Tooltip = (props: TooltipProps) => {
  return <ATooltip {...props} />;
};

export default Tooltip;
