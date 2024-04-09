import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling

const Home = () => {
  // Sample recipe data (replace with your actual recipe data)
  const recipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Chicken Alfredo',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Vegetable Stir-Fry',
      image: 'https://via.placeholder.com/150',
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