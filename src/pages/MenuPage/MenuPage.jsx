import React, { useState } from 'react';
import './MenuPage.css';

function Search({ searchTerm, onSearchChange, onSearchSubmit }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Items"
        className="search-input"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button className="search-button" onClick={onSearchSubmit}>
        Search
      </button>
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">₹{product.price}</p>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function BillingPage({ cartItems, removeFromCart }) {
  // Calculate total bill
  const totalBill = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="billing-page">
      <h1 className="billing-title">Billing Page</h1>
      <div className="billing-items">
        {cartItems.map((item, index) => (
          <div key={index} className="billing-item">
            <span>{item.title}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total-bill">
        <span>Total:</span>
        <span>${totalBill}</span>
      </div>
    </div>
  );
}


function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      price: 350,
      description: 'Delicious pasta dish with creamy sauce and bacon',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      title: 'Chicken Alfredo',
      price: 220,
      description: 'Creamy chicken pasta with parmesan cheese',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      title: 'Veg Roll',
      price: 150,
      description: 'Healthy stir-fried vegetables with soy sauce',
      image: 'https://5.imimg.com/data5/UE/EM/MY-14256424/veg-rolls-1-kg-20-pcs.jpg',
    },
    {
      id: 4,
      title: 'Chocolate Milkshake',
      price: 350,
      description: 'Delicious pasta dish with creamy sauce and bacon',
      image: 'https://myveganminimalist.com/wp-content/uploads/2020/06/Vegan-Chocolate-Milkshake-7.jpg',
    },
    {
      id: 5,
      title: 'Pineapple Pastry',
      price: 90,
      description: 'Creamy chicken pasta with parmesan cheese',
      image: 'https://bkmedia.bakingo.com/squ-sweet-n-fresh-pineapple-pastry-past2505pine-E.jpg',
    },
    {
      id: 6,
      title: 'Cheese Pasta',
      price: 260,
      description: 'Healthy stir-fried vegetables with soy sauce',
      image: 'https://cheeseknees.com/wp-content/uploads/2022/06/Cheese-Pasta-sq.jpg',
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filtered = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  return (
    <div className="menu-page">
      <div className="container">
        <h1 className="page-title">Menu</h1>
        <Search
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <BillingPage cartItems={cartItems} removeFromCart={removeFromCart} />
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default MenuPage;
