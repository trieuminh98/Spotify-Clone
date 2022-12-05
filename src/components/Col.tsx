import { Col as NCol, ColProps as NColProps } from 'antd';
import { generateFastStyles, generateShadowStyle } from 'utils/styleUtils';

export declare interface ColProps {
  shadowLevel?: number;
  shadowColor?: string;
}

// Document https://ant.design/components/grid/
export default function Col(props: ColProps & NColProps & { [x: string]: any }) {
  const { style, shadowLevel, shadowColor, ...restProps } = props;

  const { style: fastStyle, finalProps } = generateFastStyles(restProps);
  const newStyles = {
    ...(style || {}),
    ...fastStyle,
    ...generateShadowStyle({ shadowColor: shadowColor, elevation: shadowLevel }),
  };

  return <NCol {...finalProps} style={newStyles} />;
}
