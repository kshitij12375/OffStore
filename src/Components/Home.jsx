import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart, Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("featured");
  
  const handleShopNow = () => {
    navigate("/shop");
  };
  
  const handleExplore = (category) => {
    navigate(`/shop?category=${category}`);
  };

  useEffect(() => {
    // Add smooth scroll behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Cotton Tailored Shirt",
      brand: "Mast and Harbour",
      price: 989,
      rating: 4.5,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n7.jpg"
    },
    {
      id: 2,
      name: "Casual Linen Shirt",
      brand: "Mast and Harbour",
      price: 850,
      rating: 4.2,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n1.jpg"
    },
    {
      id: 3,
      name: "Summer Collection Shirt",
      brand: "Mast and Harbour",
      price: 460,
      rating: 4.0,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n3.jpg"
    },
    {
      id: 4,
      name: "Premium Cotton Shirt",
      brand: "Mast and Harbour",
      price: 999,
      rating: 4.8,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n4.jpg"
    }
  ];

  const newArrivals = [
    {
      id: 5,
      name: "Regular Fit Oxford Shirt",
      brand: "Mast and Harbour",
      price: 780,
      rating: 4.3,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n5.jpg"
    },
    {
      id: 6,
      name: "Comfort Fit Cotton Shirt",
      brand: "Mast and Harbour",
      price: 940,
      rating: 4.5,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n6.jpg"
    },
    {
      id: 7,
      name: "Cotton Blend Formal Shirt",
      brand: "Mast and Harbour",
      price: 760,
      rating: 4.1,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n8.jpg"
    },
    {
      id: 8,
      name: "Premium Dress Shirt",
      brand: "Mast and Harbour",
      price: 1028,
      rating: 4.7,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n2.jpg"
    }
  ];

  const womenCollection = [
    {
      id: 9,
      name: "Floral Summer Dress",
      brand: "Mast and Harbour",
      price: 459,
      rating: 4.2,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f5.jpg"
    },
    {
      id: 10,
      name: "Designer Party Dress",
      brand: "Mast and Harbour",
      price: 660,
      rating: 4.4,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f6.jpg"
    },
    {
      id: 11,
      name: "Casual Everyday Wear",
      brand: "Mast and Harbour",
      price: 590,
      rating: 4.0,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f7.jpg"
    },
    {
      id: 12,
      name: "Exclusive Collection Dress",
      brand: "Mast and Harbour",
      price: 786,
      rating: 4.6,
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f1.jpg"
    }
  ];

  const renderProducts = (products) => {
    return products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-actions">
            <button className="action-btn cart-btn">
              <ShoppingCart size={18} />
            </button>
            <button className="action-btn wish-btn">
              <Heart size={18} />
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-brand">{product.brand}</h3>
          <p className="product-name">{product.name}</p>
          <div className="product-meta">
            <p className="product-price">₹{product.price}</p>
            <div className="product-rating">
              <Star size={14} className="star-icon" fill="#FFD700" stroke="#FFD700" />
              <span>{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const getActiveProducts = () => {
    switch (activeTab) {
      case "featured":
        return renderProducts(featuredProducts);
      case "new":
        return renderProducts(newArrivals);
      case "women":
        return renderProducts(womenCollection);
      default:
        return renderProducts(featuredProducts);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="9706877.jpg" className="carousel-img" alt="Fashion Collection" />
              <div className="carousel-content">
                <h2>Summer Collection 2025</h2>
                <p>Step into your power with fashion that turns heads, breaks norms, and defines your vibe</p>
                <button className="primary-btn" onClick={handleShopNow}>Shop Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="9701606.jpg" className="carousel-img" alt="Elegant Fashion" />
              <div className="carousel-content">
                <h2>Elegance Redefined</h2>
                <p>Where classic elegance meets modern fashion flair</p>
                <button className="primary-btn" onClick={handleShopNow}>Shop Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="handsome-tourist-straw-hat-put-sunglasses-summer-vacation-standing-blue-background.jpg" 
                className="carousel-img" 
                alt="Summer Fashion" 
              />
              <div className="carousel-content">
                <h2>Summer Essentials</h2>
                <p>Effortless fashion for everyday statement looks</p>
                <button className="primary-btn" onClick={handleShopNow}>Shop Now</button>
              </div>
            </div>
          </div>
          <button className="carousel-control prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <ChevronLeft size={24} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <ChevronRight size={24} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Collection Categories Tabs */}
      <section className="product-section">
        <div className="section-header">
          <h2>Our Collections</h2>
          <div className="tab-selector">
            <button 
              className={`tab-btn ${activeTab === "featured" ? "active" : ""}`}
              onClick={() => setActiveTab("featured")}
            >
              Featured
            </button>
            <button 
              className={`tab-btn ${activeTab === "new" ? "active" : ""}`}
              onClick={() => setActiveTab("new")}
            >
              New Arrivals
            </button>
            <button 
              className={`tab-btn ${activeTab === "women" ? "active" : ""}`}
              onClick={() => setActiveTab("women")}
            >
              Women's Collection
            </button>
          </div>
        </div>
        <div className="products-grid">
          {getActiveProducts()}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="sale-banner">
        <div className="sale-content">
          <h2>Exclusive Sale</h2>
          <h3>Up to 70% Off</h3>
          <button className="banner-btn" onClick={handleShopNow}>Shop The Sale</button>
        </div>
      </section>

      {/* Category Features */}
      <section className="category-features">
        <div className="category-row">
          <div className="category-card winter">
            <div className="category-content">
              <h3>Winter Collection</h3>
              <p>On Sale... Up to 70% Off</p>
              <button onClick={() => handleExplore("winter")}>Shop Now</button>
            </div>
          </div>
          <div className="category-card footwear">
            <div className="category-content">
              <h3>Sneakers That Speak</h3>
              <p>Explore Footwears</p>
              <button onClick={() => handleExplore("footwear")}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="category-row triple">
          <div className="category-card traditional">
            <div className="category-content">
              <h3>Traditional Wear</h3>
              <p>Buy one get one free</p>
              <button onClick={() => handleExplore("traditional")}>Explore</button>
            </div>
          </div>
          <div className="category-card kids">
            <div className="category-content">
              <h3>Kids Wear</h3>
              <p>New Collection Available</p>
              <button onClick={() => handleExplore("kids")}>Explore</button>
            </div>
          </div>
          <div className="category-card formal">
            <div className="category-content">
              <h3>Formal Outfits</h3>
              <p>Now On Sale</p>
              <button onClick={() => handleExplore("formal")}>Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12L19 12"></path>
              <path d="M12 5L19 12L12 19"></path>
            </svg>
          </div>
          <h3>Free Shipping</h3>
          <p>On all orders above ₹999</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
          </div>
          <h3>Easy Returns</h3>
          <p>7 days return policy</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>24/7 Support</h3>
          <p>Customer support available</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <p>Get updates on new arrivals, special offers and more.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">OffStore</div>
            <p>Your one-stop destination for trendy fashion and accessories at affordable prices.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Men's Clothing</a></li>
              <li><a href="#">Women's Clothing</a></li>
              <li><a href="#">Kids Collection</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Footwear</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +91 1234567890</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> New York, USA</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> support@offstore.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 OffStore. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;