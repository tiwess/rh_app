import { css } from 'styled-components';

export const global = {
    styles: css`
        *,
        *::after,
        *::before {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            outline: none;
        }
        html,
        body {
            font-size: 16px;
            line-height: 110%;
            font-family: 'Ubuntu', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
    `,
};
