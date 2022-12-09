import { StyledChart } from "./styles";
import data from "../../data.json";
import Column from "../Column";

const currentDay = new Date().getDay();

export default function Chart() {
   
   return (
      <StyledChart>
         <ul>
            {data.map(item => {
               const height = `${(item.amount * 2.85).toFixed(2)}px`;
               return <Column 
                  key={item.day} 
                  currentDay={currentDay === item.index ? true : false}
                  height={height} 
                  day={item.day} 
                  amount={item.amount} />
            })}
         </ul>
      </StyledChart>
   )
}