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
               <h2>Total this month</h2>
               <h3>$478.33</h3>
            </div>
            <div className="month__right">
               <h3>+2.4%</h3>
               <span>from last month</span>
            </div>
         </div>
      </StyledMain>
   )
}