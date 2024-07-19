

/*
React.FC
React.ReactNode
*/

import Counter from "./counter";

export default function Home(){
  return (
          <Counter 
            message={"Counter App"} 
            count={10}
          />
        )
}