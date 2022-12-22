import React from 'react';

export type JSXElement = JSX.Element | JSX.Element[] | null | React.ReactNode;

export type IDynamical<T> = {
  [k: string]: T;
};

export type ActionPayload = {
  [key: string]: string | number | Function | boolean | Object | null;
};