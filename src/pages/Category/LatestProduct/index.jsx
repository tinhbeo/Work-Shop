import productApi from 'api/product';
import ButtonLink from 'components/ButtonLink';
import Product from 'components/Product';
import React, { useState } from 'react';
function LatestProduct() {
    const [listProduct, setListProducts] = useState([]);

    useState(() => {
        async function getProducts() {
            try {
                const respone = await productApi.getAll({ limit: 8, page: 1 });
                setListProducts(respone);
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
