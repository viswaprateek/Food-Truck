import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const ChineseRecipePage = () => {
    return (
        <div className="recipe-page">
            <div className="recipe-details">
                <div className="recipe-title">
                    <h1>Chinese Recipe</h1>
                </div>
                <div className="recipe-image">
                    <img src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/about_us/4.jpg?tr=w-640" alt="Chinese Recipe" />
                </div>
                <div className="recipe-description">
                    <p>Harmonious blend of savory, sweet, sour, and spicy flavors, showcased in dishes like crispy.</p>
                    <p>Here you can add more details about the Chinese recipe, such as ingredients and cooking instructions.</p>
                    <p>Chinese cuisine is known for its harmonious blend of savory, sweet, sour, and spicy flavors, showcased in dishes like crispy sweet and sour chicken, flavorful stir-fried noodles, and aromatic hot and sour soup. With a rich culinary heritage spanning thousands of years, Chinese food offers a diverse array of dishes, from the bold flavors of Sichuan cuisine to the delicate dim sum of Cantonese cuisine. Whether you're indulging in crispy Peking duck, tender char siu pork, or spicy mapo tofu, Chinese cuisine promises a delicious and satisfying dining experience that will leave you craving more.</p>
                </div>
            </div>
        </div>
    );
};

export default ChineseRecipePage;
