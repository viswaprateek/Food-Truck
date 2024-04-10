import React from 'react';
import { Link } from 'react-router-dom';
import './common.css'
const IndianRecipePage = () => {
    return (
        <div className="recipe-page">

            <div className="recipe-details">
                
            <div className="recipe-title"><h1>Italian Recipe</h1></div>
                <div className="recipe-image">
                    <img src="https://t4.ftcdn.net/jpg/04/36/36/57/360_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg" alt="Indian Recipe" />
                </div>
                <div className="recipe-description">
                    <p>Rich tapestry of flavors, spices, and textures, reflecting its diverse cultural heritage.</p>

                    <p>Here you can add more details about the Indian recipe, such as ingredients and cooking instructions.</p>
                    <p>Sure, here's a sample paragraph describing an Indian recipe:

                        "Indian cuisine is renowned for its rich tapestry of flavors, spices, and textures, reflecting its diverse cultural heritage. One of the most iconic dishes is curry, a savory dish made with a variety of spices, vegetables, and proteins like chicken, lamb, or paneer (Indian cheese). Curries are often accompanied by fragrant basmati rice or fluffy naan bread, perfect for soaking up the flavorful sauces. Other popular Indian dishes include biryani, a fragrant rice dish cooked with spices and meat or vegetables, and samosas, crispy pastry pockets filled with spiced potatoes, peas, and sometimes meat. Whether you're enjoying a creamy butter chicken, tangy tandoori chicken, or spicy vindaloo, Indian cuisine offers a culinary journey that delights the senses and leaves a lasting impression."</p>

                </div>
            </div>

        </div>
    );
};

export default IndianRecipePage;
