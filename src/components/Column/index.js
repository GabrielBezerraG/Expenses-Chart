import React from "react";
import { StyledColumn } from "./styles";

export default function Column(props) {

   const [tooltipVisibility, setTooltipVisibility] = React.useState(false);

   return (
      <StyledColumn height={props.height}>
         <i className={props.currentDay ? "column__bar column__bar--active" : "column__bar"} onMouseEnter={() => setTooltipVisibility(true)} onMouseLeave={() => setTooltipVisibility(false)} />
         <span className="column__day">{props.day}</span>
         {tooltipVisibility && <span className="column__tooltip">{'$' + props.amount}</span>}
         
      </StyledColumn>
   )
}