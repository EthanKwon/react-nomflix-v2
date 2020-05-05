import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

    ${reset};
    a{
        text-decoration:none;
        color : inherit;
    }

    * {
        box-sizing : border-box;

    }

    html{
        font-size : 16px;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        background-color: rgba(20, 20, 20, 1);
        color : #fff;
        padding-top: 3.5rem;
    }
`;

export default GlobalStyle;
