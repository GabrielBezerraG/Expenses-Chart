import styled from "styled-components";

export const StyledMain = styled.main`
   background-color: var(--white);
   border-radius: var(--border-radius);
   padding: 1.55rem 1.1rem;

   h1 {
      font-size: 1.35rem;
      letter-spacing: -0.2px;
      font-weight: 700;
      margin-bottom: 3.1rem;
   }

   .horizontal-line {
      width: 100%;
      border-bottom: 2px solid var(--light-grey);
      margin-bottom: 1.5rem;
   }

   .month {
      display: flex;
      justify-content: space-between;
   }

   .month__left {

      h2 {
         color: var(--grey);
         font-size: 0.85rem;
         margin-bottom: 0.65rem;
      }

      h3 {
         font-size: 1.6rem;
         font-weight: 700;
         letter-spacing: 0.5px;
      }
   }

   .month__right {
      text-align: end;
      align-self: flex-end;

      h3 {
         font-weight: 700;
         font-size: 0.85rem;
         margin-bottom: 0.1rem;
      }

      span {
         color: var(--grey);
         font-size: 0.85rem;
      }
   }

   @media screen and (min-width: 1080px) {
      padding: 2.1rem 2.25rem 2.6rem;

      h1 {
         font-size: 1.8rem;
         margin-bottom: 3.88rem;
      }

      .horizontal-line {
         margin-bottom: 2rem;
      }

      .month__left {

         h2 {
            font-size: 1.01rem;
         }

         h3 {
            font-size: 2.65rem;
            letter-spacing: -0.05px;
         }
      }

      .month__right {
         margin-bottom: 0.2rem;

         h3 {
            font-size: 1.025rem;
            margin-bottom: 0.35rem;
         }

         span {
            font-size: 1rem;
         }
      }
   }
` 