import { Button as AButton, ButtonProps as AButtonProps } from 'antd';
import { JSXElement } from 'commons/interfaces/common';
import { Tooltip } from 'components';
import { compose } from 'utils/objectUtils';
import styles from './Button.module.scss';

type ButtonProps = AButtonProps & {
  tooltipText?: string;
  isLoginStyle?: boolean;
};

const Button = (props: ButtonProps) => {
  const { tooltipText = '', className = {}, isLoginStyle = false } = props;
  const newClassName = className + '' + (isLoginStyle ? '' : '');
  const addTooltip = (children: JSXElement) => {
    if (tooltipText) {
      return <Tooltip title={tooltipText}>{children}</Tooltip>;
    }
    return children;
  };

  const addConfig = compose(addTooltip);

  return addConfig(<AButton className={`${className}`} {...props} />);
};

export default Button;
