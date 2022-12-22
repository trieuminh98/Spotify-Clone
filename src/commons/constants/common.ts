export const COLORS = {
  primary: 'rgba(53, 165, 245, 0.75)', // Required, dont' change this
  secondary: 'yellow', // Required, dont' change this
  warning: '#ff6600',
  grey: '#c0c0c0',
  white: '#fff',
  purple: '#914AFF',
  orange: '#FE5F4B',
};

export type MethodType = 'get' | 'post' | 'put' | 'delete';

export const METHOD_TYPES = {
  GET: 'get' as MethodType,
  POST: 'post' as MethodType,
  PUT: 'put' as MethodType,
  DELETE: 'delete' as MethodType,
};
