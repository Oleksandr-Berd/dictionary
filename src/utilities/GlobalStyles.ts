import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Inconsolata-Regular";
  src: local("Inconsolata-Regular"),
    url(("assets/fonts/inconsolata/static/Inconsolata-Regular.ttf")) format("truetype");
}

@font-face {
  font-family: "Inter-Regular";
  src: local("Inter-Regular"),
    url(("assets/fonts/inter/static/Inter-Regular.ttf")) format("truetype");
}

@font-face {
  font-family: "Lora-Regular";
  src: local("Lora-Regular"),
    url(("assets/fonts/lora/static/Lora-Regular.ttf")) format("truetype");
}

body{
 
}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a{
  margin: 0;
}

ul, nav{
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;
