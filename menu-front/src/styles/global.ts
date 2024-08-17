// global.ts
import { createGlobalStyle } from 'styled-components';
import NanumSquareB from './fonts/NanumSquareB.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'NanumSquareB';
        src: local('NanumSquareB');
        font-style: normal;
        src: url(${NanumSquareB}) format('truetype');
  }`

export default GlobalStyle;
