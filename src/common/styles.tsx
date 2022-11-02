import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 1rem;
}

::-webkit-scrollbar {
  display: none;
  width: 0;
}

body {
  background-color: #e5ebed;
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
}

h1,
h2,
h3 {
  font-weight: 500;
}  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px 200px 32px;
  }
`;
