import React from "react";
import CategoryCard from "components/CategoryCard";
import card1 from 'assets/image/card-1.jpg';
import card2 from 'assets/image/card-2.jpg';
import card3 from 'assets/image/card-3.jpg';
import "./style.scss";
function CategoryProducts(props) {
    const data = [
        {
            id: "1",
            link: "/123",
            text: "Kitchen & Dining",
            image: card1,
        },
        {
            id: "2",
            link: "/123",
            text: "Living Room",
            image: card2,
        },
        {
            id: "3",
            link: "/123",
            text: "Bathroom",
            image: card3,
        },
    ];

    return (
        <section className="pt-2">
            <div className="container-fluid">
                <div className="row">
                    {data.map((item) => (
                        <div key={item.id} className="col-lg-4">
                            <CategoryCard
                                link={item.link}
                                text={item.text}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryProducts;
