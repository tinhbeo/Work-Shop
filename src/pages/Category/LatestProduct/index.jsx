import React, { useState } from "react";
import ButtonLink from "components/ButtonLink";
import Product from "components/Product";
function LatestProduct(props) {
    const [listProduct, setListProducts] = useState([]);

    useState(() => {
        async function getProducts() {
            try {
                const api =
                    "https://6226c9bc2dfa5240180d2202.mockapi.io/shop/products?page=1&limit=8";
                const respone = await fetch(api);
                const data = await respone.json();
                setListProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <h2 className="text-center">Latest Products</h2>
                </div>
                <div className="row">
                    {listProduct.map((product) => (
                        <div key={product.id} className="col-lg-3">
                            <Product
                                id={product.id}
                                image1={product.image1}
                                image2={product.image2}
                                name={product.name}
                                price={product.price}
                            />
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    <ButtonLink link="/products" text="load more" />
                </div>
            </div>
        </section>
    );
}

export default LatestProduct;
