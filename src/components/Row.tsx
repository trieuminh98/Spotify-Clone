import { Row as ARow, RowProps as ARowProps } from 'antd';
import { JSXElement } from 'commons/interfaces/common';
import { FastStyle, generateFastStyles, generateShadowStyle } from 'utils/styleUtils';

interface RowProps {
  children?: JSXElement;
  shadowLevel?: number;
  shadowColor?: string;
}

// Document https://ant.design/components/grid/
const Row = (props: RowProps & ARowProps & { [x: string]: any }) => {
  const { style, shadowLevel, shadowColor, ...restProps } = props;
  const { style: fastStyle, finalProps } = generateFastStyles(restProps);
  const newStyles = {
    ...(style || {}),
    ...fastStyle,
    ...generateShadowStyle({ shadowColor: shadowColor, elevation: shadowLevel }),
  };

  return <ARow {...finalProps} style={newStyles} />;
};

export default Row;
