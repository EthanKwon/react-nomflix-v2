import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
   

    * {
        box-sizing : border-box;

    }

    html{
        font-size : 14px;
    }

    body {
        background-color: rgba(20, 20, 20, 1);
        color : #fff;
        padding-top: 3.5rem;
    }

    input {
        all: unset;
    }

    a{
        text-decoration:none;
        color : inherit;
    }
`;

export default GlobalStyle;
