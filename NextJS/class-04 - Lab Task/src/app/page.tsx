/*
React.FC
React.ReactNode
*/

import AllProducts from "./all-products";
import Categories from "./categories";
import MyInfo from "./myinfo";

export default function Home() {
  return (
    <>
      <MyInfo />
      <Categories />
      <AllProducts />
    </>
  );
}
