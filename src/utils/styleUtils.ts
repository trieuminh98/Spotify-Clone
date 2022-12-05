import { IDynamical } from 'commons/interfaces/common';
import _, { first, map, omit, replace, size } from 'lodash';
/**
 * Generate shadow to your view
 * @param {*} shadowColor
 * @param {*} elevation
 */
type ShadowStyle = {
  shadowColor?: string;
  elevation?: number;
};
const generateShadowStyle = (styles: ShadowStyle) => {
  const { shadowColor = '#cecece', elevation = 0 } = styles;
  if (elevation == 0) return {};
  return {
    boxShadow: `${elevation}px ${elevation * 3}px ${elevation * 3}px ${shadowColor || '#000'}`,
  };
};

const STYLES = {
  'bW-{number}': (number: number) => {
    return { borderWidth: -number };
  },
  'bBLR-{number}': (number: number) => {
    return { borderBottomLeftRadius: -number };
  },
  'bBRR-{number}': (number: number) => {
    return { borderBottomRightRadius: -number };
  },
  'bTLR-{number}': (number: number) => {
    return { borderTopLeftRadius: -number };
  },
  'bTRR-{number}': (number: number) => {
    return { borderTopRightRadius: -number };
  },
  't-{number}': (number: number) => {
    return { top: -number };
  },
  'b-{number}': (number: number) => {
    return { bottom: -number };
  },
  'l-{number}': (number: number) => {
    return { left: -number };
  },
  'r-{number}': (number: number) => {
    return { right: -number };
  },
  // Padding
  'p-{number}': (number: number) => {
    return { padding: -number };
  },
  'pT-{number}': (number: number) => {
    return { paddingTop: -number };
  },
  'pL-{number}': (number: number) => {
    return { paddingLeft: -number };
  },
  'pR-{number}': (number: number) => {
    return { paddingRight: -number };
  },
  'pB-{number}': (number: number) => {
    return { paddingBottom: -number };
  },
  'pH-{number}': (number: number) => {
    return { paddingHorizontal: -number };
  },
  'pV-{number}': (number: number) => {
    return { paddingVertical: -number };
  },
  'bR-{number}': (number: number) => {
    return { borderRadius: -number };
  },
  // Margin
  'm-{number}': (number: number) => {
    return { margin: -number };
  },
  'mT-{number}': (number: number) => {
    return { marginTop: -number };
  },
  'mL-{number}': (number: number) => {
    return { marginLeft: -number };
  },
  'mR-{number}': (number: number) => {
    return { marginRight: -number };
  },
  'mB-{number}': (number: number) => {
    return { marginBottom: -number };
  },
  'mH-{number}': (number: number) => {
    return { marginHorizontal: -number };
  },
  'mV-{number}': (number: number) => {
    return { marginVertical: -number };
  },

  'bW{number}': (number: number) => {
    return { borderWidth: number };
  },
  'bBLR{number}': (number: number) => {
    return { borderBottomLeftRadius: number };
  },
  'bBRR{number}': (number: number) => {
    return { borderBottomRightRadius: number };
  },
  'bTLR{number}': (number: number) => {
    return { borderTopLeftRadius: number };
  },
  'bTRR{number}': (number: number) => {
    return { borderTopRightRadius: number };
  },
  't{number}': (number: number) => {
    return { top: number };
  },
  'b{number}': (number: number) => {
    return { bottom: number };
  },
  'l{number}': (number: number) => {
    return { left: number };
  },
  'r{number}': (number: number) => {
    return { right: number };
  },
  // Padding
  'p{number}': (number: number) => {
    return { padding: number };
  },
  'pT{number}': (number: number) => {
    return { paddingTop: number };
  },
  'pL{number}': (number: number) => {
    return { paddingLeft: number };
  },
  'pR{number}': (number: number) => {
    return { paddingRight: number };
  },
  'pB{number}': (number: number) => {
    return { paddingBottom: number };
  },
  'pH{number}': (number: number) => {
    return { paddingHorizontal: number };
  },
  'pV{number}': (number: number) => {
    return { paddingVertical: number };
  },
  'bR{number}': (number: number) => {
    return { borderRadius: number };
  },
  // Margin
  'm{number}': (number: number) => {
    return { margin: number };
  },
  'mT{number}': (number: number) => {
    return { marginTop: number };
  },
  'mL{number}': (number: number) => {
    return { marginLeft: number };
  },
  'mR{number}': (number: number) => {
    return { marginRight: number };
  },
  'mB{number}': (number: number) => {
    return { marginBottom: number };
  },
  'mH{number}': (number: number) => {
    return { marginHorizontal: number };
  },
  'mV{number}': (number: number) => {
    return { marginVertical: number };
  },
};

export type FastStyle = Record<string, number | string> & {
  fixed?: boolean;
  absolute?: boolean;
};

const generateFastStyles = (props: FastStyle) => {
  var style = {};
  if (props.fixed) {
    style = { position: 'fixed' };
  }
  if (props.absolute) {
    style = { position: 'absolute' };
  }
  const finalProps = { ...props } || {};
  map(
    omit(STYLES, ['fixed', 'absolute', 'children', 'style', 'containerStyle']),
    (_return: (number: number) => { [k: string]: number }, key: string) => {
      const regex = new RegExp(replace(key, '{number}', '[0-9]+'));
      map(props, (_value, key) => {
        if (regex.test(key)) {
          const numberRegex = new RegExp('[0-9]+');
          const matches = numberRegex.exec(key);
          var number = 0;
          if (size(matches) > 0) {
            number = parseInt(first(matches) || '');
          }
          delete finalProps[key];
          style = { ...style, ..._return(number) };
        }
      });
    }
  );
  return { style, finalProps };
};

export { generateShadowStyle, generateFastStyles };
