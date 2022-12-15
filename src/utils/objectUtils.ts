import { isFunction } from 'lodash';

export const compose =
  <T>(...fns: T[]) =>
  <U>(data: U) => {
    let result = data;
    fns.forEach((fn) => {
      if (isFunction(fn)) {
        result = fn(result);
      }
    });
    return result;
  };
