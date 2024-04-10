import React from 'react';
import { Link } from 'react-router-dom';
import './common.css'
const ItalianRecipePage = () => {
    return (
        <div className="recipe-page">

            <div className="recipe-details">
                <div className="recipe-title"><h1>Italian Recipe</h1></div>
                
                <div className="recipe-image">
                    <img  src="https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000603046726.jpg" alt="Italian Recipe" />
                </div>
                <div className="recipe-description">
                    <p>Quality ingredients, from the comforting embrace of creamy risotto to the robust flavors.</p>

                    <p>Here you can add more details about the Italian recipe, such as ingredients and cooking instructions.</p>
                    <p>Italian cuisine is celebrated for its simplicity and depth of flavor. From the comforting embrace of creamy risotto to the robust flavors of tomato-based pasta sauces, Italian food offers a culinary experience that is both satisfying and soulful. Classic dishes like spaghetti carbonara, lasagna, and margherita pizza showcase the beauty of using quality ingredients to create unforgettable meals. Whether you're indulging in a rich tiramisu for dessert or savoring a plate of fresh pasta tossed in garlic-infused olive oil, Italian cuisine invites you to slow down, savor each bite, and appreciate the joy of good food and good company.</p>

                </div>
            </div>

        </div>
    );
};

export default ItalianRecipePage;
