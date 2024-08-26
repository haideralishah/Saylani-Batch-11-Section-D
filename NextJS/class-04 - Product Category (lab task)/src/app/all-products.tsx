import Product from './product';
import { ProductItemType } from "./product-item-type";


type ProductsListType = {
    productsList: ProductItemType[]
}


export default function AllProducts({ productsList }: ProductsListType) {
    return (
        <table style={{ border: '1px solid black' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Sr.
                    </th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Name
                    </th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Price
                    </th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Category
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    productsList.map(({ id, name, price, category }, index) => (
                        <Product
                            key={name + id}
                            id={index + 1}
                            name={name}
                            price={price}
                            category={category}
                        />
                    ))
                }




            </tbody>
        </table>
    );
}