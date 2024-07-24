import Product from './product';



export default function AllProducts() {
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
                <Product />
                <Product />
                <Product />

            </tbody>
        </table>
    );
}