import React from 'react';
import BlogNew from './BlogNew';
import Collection from './Collection';
import FeaturedProducts from './FeaturedProducts';
import ImageList from './ImageList';
import Slider from './Slider';
function Home(props) {
    return (
        <div className='main'>
            <Slider />
            <FeaturedProducts />
            <Collection />
            <BlogNew />
            <ImageList />
        </div>
    );
}

export default Home;