"use client";

import { useEcommerceStore } from "@/store/ecommerce-example-store";

export default function Cart() {
  const { cart } = useEcommerceStore();

  let values = Object.values(cart);
  let grandTotalPrice = values.reduce(
    (prevPrice, { price, qty }) => price * qty + prevPrice,
    0
  );

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>

        {Object.keys(cart).map((key) => (
          <tr>
            <td>{cart[key].title}</td>
            <td>{cart[key].price}</td>
            <td>{cart[key].qty}</td>
            <td>{cart[key].price * cart[key].qty}</td>
          </tr>
        ))}

        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>{grandTotalPrice}</th>
        </tr>
      </table>
    </div>
  );
}
