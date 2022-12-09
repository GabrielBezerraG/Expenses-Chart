import styled from "styled-components";

export const StyledColumn = styled.li `
   text-decoration: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 0.75rem;
   position: relative;

   .column__bar {
      display: inline-block;
      width: 33px;
      height: ${(props) => props.height};
      border-radius: 3px;
      background-color: var(--soft-red);
      transition: filter 100ms;
      cursor: pointer;
   }

   .column__bar:hover {
      filter: opacity(0.5);
   }

   .column__bar--active {
      background-color: var(--cyan);
   }

   .column__day {
      color: var(--grey);
      font-size: 0.65rem;
   }

   .column__tooltip {
      position: absolute;
      background-color: var(--dark-brown);
      color: var(--white);
      font-size: 0.7rem;
      padding: 8px 6px;
      border-radius: 5px;
      top: -1.9rem;
      letter-spacing: 0.25px;
   }

   @media screen and (min-width: 1080px) {

      row-gap: 0.6rem;

      .column__bar {
         width: 50px;
         border-radius: 5px;
      }

      .column__day {
         font-size: 0.85rem;
      }

      .column__tooltip {
         top: -2.65rem;
         font-size: 1rem;
         padding: 11px 8px;
      }

   }
`