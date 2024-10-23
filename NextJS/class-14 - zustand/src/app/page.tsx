import Divide from "@/components/divide";
import Subtraction from "@/components/minus";
import Multiply from "@/components/multiply";
import NumberInput from "@/components/number-input";
import Sum from "@/components/sum";


export default function Home() {
  return (
    <>
      <NumberInput />
      <Sum />
      <Subtraction />
      <Multiply />
      <Divide />
    </>
  );
}

