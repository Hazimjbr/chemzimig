declare module 'react-katex' {
  import * as React from 'react';

  export interface KaTeXProps {
    math?: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error | string) => React.ReactNode;
    settings?: any;
    children?: string;
  }

  export default class InlineMath extends React.Component<KaTeXProps> {}
  export class BlockMath extends React.Component<KaTeXProps> {}
}
