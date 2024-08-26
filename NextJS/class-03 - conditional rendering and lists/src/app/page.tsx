/*
React.FC
React.ReactNode
*/

import Counter from "./counter";
import StudentsListing from "./students";

const students = [
  {
    name: "haider",
    feePaid: true,
    rollNum: 2643,
  },
  {
    name: "abdullah",
    feePaid: false,
    rollNum: 2644,
  },
  {
    name: "muzammil",
    feePaid: true,
    rollNum: 2645,
  },
];

export default function Home() {
  return (
    <>
      {/* <StudentsListing
        name={students[0].name}
        feePaid={students[0].feePaid}
        rollNum={students[0].rollNum}
      /> */}
         
    {
      students.map(({name, feePaid, rollNum}, i)=>(
        <StudentsListing
          name={name}
          feePaid={feePaid}
          rollNum={rollNum}
        />
      ))
    }



      {/* <Counter message={"Counter App"} count={10} /> */}
    </>
  );
}
