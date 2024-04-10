import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling

const Home = () => {
  // Sample recipe data (replace with your actual recipe data)
  const recipes = [
    {
      id: 1,
      title: 'Indian',
      image: 'https://t4.ftcdn.net/jpg/04/36/36/57/360_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg ',
      para:'Rich tapestry of flavors, spices, and textures, reflecting its diverse cultural heritage.'
    },
    {
      id: 2,
      title: 'Chinese',
      image: 'https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/about_us/4.jpg?tr=w-640',
      para:'harmonious blend of savory, sweet, sour, and spicy flavors, showcased in dishes like crispy'
    },
    {
      id: 3,
      title: 'Italian',
      image: 'https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000603046726.jpg',
      para:'quality ingredients, from the comforting embrace of creamy risotto to the robust flavors '
    },
  ];

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">FoodStop</div>
        <nav className="nav-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/menu">Menu</Link>
        </nav>
      </header>
      <div className="hero-section">
        <h1>Welcome to FoodStop</h1>
        <p>Discover delicious recipes to satisfy your cravings.</p>
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <h4>{recipe.para}</h4>
            <Link to={`/recipe/${recipe.id}`} className="view-recipe">View Recipe</Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} FoodStop. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;