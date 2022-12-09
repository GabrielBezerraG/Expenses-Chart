import Chart from "../Chart";
import { StyledMain } from "./styles";

export default function Main() {
   return (
      <StyledMain>
         <h1>Spending - Last 7 days</h1>
         <Chart />
         <div className="horizontal-line" />
         <div className="month">
            <div className="month__left">
               <h3>Total this month</h3>
               <h4>$478.33</h4>
            </div>
            <div className="month__right">
               <h4>+2.4%</h4>
               <span>from last month</span>
            </div>
         </div>
      </StyledMain>
   )
}