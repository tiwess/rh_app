declare module '*.jpg' {
    export default '' as string;
}

declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    export default ReactComponent;
}

declare module '*.png' {
    export default '' as string;
}

declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';
declare module '*.eot';
declare module '*.webm';
