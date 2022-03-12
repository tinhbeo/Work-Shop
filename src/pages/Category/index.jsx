import React from 'react';
import Slider from './Slider'
import CategoryProducts from './CategoryProducts';
import LatestProduct from './LatestProduct';
function Category(props) {
    return (
        <div className='main__category'>
            <Slider />
            <CategoryProducts />
            <LatestProduct />
        </div>
    );
}
export default Category;