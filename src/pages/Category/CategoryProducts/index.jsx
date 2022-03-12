import React from 'react';
import CategoryCard from '../../../components/CategoryCard';
import './style.scss';
function CategoryProducts(props) {
    const data = [
        {
            link: '/123',
            text: 'Kitchen & Dining',
            image: 'https://vendor.webuildthemes.com/assets/images/card-1.jpg'
        },
        {
            link: '/123',
            text: 'Living Room',
            image: 'https://vendor.webuildthemes.com/assets/images/card-2.jpg'
        },
        {
            link: '/123',
            text: 'Bathroom',
            image: 'https://vendor.webuildthemes.com/assets/images/card-3.jpg'
        }
    ]

    return (
        <section className='pt-2'>
            <div className="container-fluid">
                <div className="row">
                    {data.map(item => (
                        <div className="col-lg-4">
                            <CategoryCard link={item.link} text={item.text} image={item.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryProducts;