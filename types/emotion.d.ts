import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme extends Record<string, any> {}
}
declare global {
    interface Theme extends Record<string, any> {}
}