import styled from "styled-components";

export const StyledHeader = styled.header`
   background-color: var(--soft-red);
   display: flex;
   justify-content: space-between;
   padding: 1.3rem 1.1rem;
   border-radius: var(--border-radius);
   color: var(--white);
   margin-bottom: 0.9rem;

   h2 {
      font-size: 0.82rem;
      margin-bottom: 0.65rem;
      color: var(--light-grey);
   }

   h3 {
      font-size: 1.3rem;
      font-weight: 700;
   }

   .header__logo {
      width: 60px;
      margin-right: 0.25rem;
   }

   @media screen and (min-width: 1080px) {
      padding: 1.65rem 1.75rem;
      margin-bottom: 1.35rem;

      h2 {
         font-size: 1rem;
         margin-bottom: 0.9rem;
      }

      h3 {
         font-size: 1.8rem;
      }

      .header__logo {
         width: 72px;
         margin-right: 0.4rem;
      }
   }

`