import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    @media screen and (max-width: 414px){
        #root {
            display: flex;
            flex-direction: column;
            align-items: center; 
            height: 100vh;
        }
      }
`;

export default GlobalStyle;