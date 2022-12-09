import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

   :root {
      --soft-red: #ec775f;
      --cyan: #76b5bc;

      --dark-brown: #382314;
      --grey: #93867b;
      --light-grey: #f8e9dd;
      --white: #fffaf5;
      
      --border-radius: 10px;
   }

   html {
      font-size: 18px;
      font-family: 'DM Sans', sans-serif;
   }

   .main-container {
      max-width: 1440px;
      height: 100vh;
      box-sizing: border-box;
      margin: 0 auto;
      background-color: var(--light-grey);
      padding: 3.75rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .content {
      width: 342px;
   }


   @media screen and (min-width: 1080px) {

      :root {
         --border-radius: 20px
      }

      .content {
         width: 540px;
      }
   }

`