import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   /* border: 1px solid #0f0;
   border is for testing purposes only*/

   --purple: #cc99ff;
   --purple2: #cc99ff99;
   --pink: #ffaaff;
   --white: #fafafa;
   --black: #0f0f0f;
   --gray: #5f5f5f;
}

html,
body {
   height: 100%;
   width: 100%;
   margin: 0;
   padding: 0;
}

body {
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   align-items: center;
   justify-content: center;

   background: var(--purple);
   font-family: "Inter", sans-serif;
   padding: 2.5vw;
}

a,
a:hover,
a:visited,
a:focus,
a:-webkit-any-link {
   color: inherit;
   text-decoration: none;
}

button,
a {
   cursor: pointer;
}

::selection {
   background: var(--purple);
}
`;

export default GlobalStyles;
