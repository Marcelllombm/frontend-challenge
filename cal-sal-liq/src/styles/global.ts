import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
:root {
    --green:rgba(113, 255, 160, 1);
    --background: linear-gradient(116.58deg, #5A2782 0%, #7A1F9A 29.33%, #4939A7 60.02%, #0B7FB0 79.47%);
    --gray: rgba(229, 226, 233, 1);
    --textcifra: rgba(89, 80, 102, 1);
    --purple:rgba(53, 37, 95, 1);

}

*{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
}

//font-sixe: 16px (desktop)

html{
    @media (max-width:1080px){
        font-size: 93.75%; // 16 multiplica 0.9375 = 15
    }
    @media (max-width: 720px) { // 16 multiplica 0.875 = 14
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    color:white;
    height: 100%;
    width: 100%;
    text-align:center;
    font-family: 'Roboto', sans-serif;
    
    //deixa a font com mais detalhe
     -webkit-font-smoothing: antialiased;
     
 }

 body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button {
    cursor: pointer;
   
}

[disabled]{
    opacity: 0.6;
    cursor: not-allwed;
}

`