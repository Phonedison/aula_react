import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --orange:#ff640a;
  --dark-orange: #e25300;
  --light-grey:#b1b1b1;
  --white:#fff;
  --dark:#0e0e0e;
  --black:#000;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Lato", "Helvetica Neue", helvetica, sans-serif;
  line-height: 1.35;
}

body {
  color: #fff;
  background-color: var(--dark);
  -webkit-font-smoothing: antialiased;
  overflow-anchor: none;
  font-size: 1.6rem;
}

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;

}

section {
  width: 100%;
  max-width: 72rem;
  height: 100%;
  display: flex;
  align-items: center;

}

h2 {
  font-size: 2.4rem;
}

`;
