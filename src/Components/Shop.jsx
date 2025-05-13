import './Shop.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from './CartContext';
import { auth } from './firebase';

const Shop = () => {
  const { addToCart } = useCart();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const user = auth.currentUser;

  const mensProducts = [
    {
      id: 'cm1',
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7",
      title: "Men's Casual Denim Shirt",
      price: 700,
      rating: 4.7
    },
    {
      id: 'cm2',
      image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4",
      title: "Men's Casual Check Shirt",
      price: 460,
      rating: 4.7
    },
    {
      id: 'cm3',
      image: "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36",
      title: "Round Neck Slimfit Tshirt",
      price: 460,
      rating: 4.7
    },
    {
      id: 'cm4',
      image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90",
      title: "Round Neck Slimfit Tshirt",
      price: 450,
      rating: 4.7
    },
    {
      id: 'cm5',
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmsQiwrSfDn-DhUky5ExNE8_2-Mw2v1RnY6KJ0yqEU1LvqTuY1lMuzedLNegJ8fND3xdRoj2Xh5sP7z93_ccsuBeeLvdQawLzHnJ05CjIw-zedkrSEZ0jt",
      title: "Solid White Round Neck Tshirt",
      price: 350,
      rating: 4.7
    },
    {
      id: 'cm6',
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      title: "Men's Fashion Trendy Tshirt",
      price: 650,
      rating: 4.7
    },
    {
      id: 'cm7',
      image: "https://images.unsplash.com/photo-1490168105446-f43395eb50b5",
      title: "Men Lace up Sneaker Shoes",
      price: 1450,
      rating: 4.7
    },
    {
      id: 'cm8',
      image: "https://images.unsplash.com/photo-1464278860589-b2ed64f87e22",
      title: "Men Leather Sneaker Shoes",
      price: 2559,
      rating: 4.7
    },
    {
      id: 'cm9',
      image: "https://images.unsplash.com/photo-1512755051947-dea0029e93ad",
      title: "Mens Trendy Overcoat Jacket",
      price: 3280,
      rating: 4.7
    },
    {
      id: 'cm10',
      image: "https://images.unsplash.com/photo-1527016021513-b09758b777bd",
      title: "Mens Trendy Denim Shirt",
      price: 1380,
      rating: 4.7
    },
    {
      id: 'cm11',
      image: "https://images.unsplash.com/photo-1581068505339-d155712f0add",
      title: "Mens Stylish Street Shoes",
      price: 1899,
      rating: 4.7
    },
    {
      id: 'cm12',
      image: "https://images.unsplash.com/photo-1619466122087-e1ff06cf234b",
      title: "Mens Stylish Street Shoes",
      price: 1899,
      rating: 4.7
    },
    {
      id: 'cm13',
      image: "https://images.unsplash.com/photo-1496637721836-f46d116e6d34",
      title: "100% UV protected Wayfarer Sunglasses",
      price: 750,
      rating: 4.7
    },
    {
      id: 'cm14',
      image: "https://images.unsplash.com/photo-1563891217861-7924b471afb3",
      title: "UV protected Trendy Sunglasses",
      price: 450,
      rating: 4.7
    },
    {
      id: 'cm15',
      image: "https://images.unsplash.com/photo-1586882829491-b81178aa622e",
      title: "Men's Magnum casual Sneakers",
      price: 3750,
      rating: 4.7
    },
    {
      id: 'cm16',
      image: "https://images.unsplash.com/photo-1588099768550-4014589e03e0",
      title: "Men suede Sneaker shoes",
      price: 3450,
      rating: 4.7
    }
  ];

  const womensProducts = [
    {
      id: 'cw1',
      image: "https://images.unsplash.com/photo-1634412327877-836164201d16",
      title: "Women Regular Fit Solid Formal Shirt",
      price: 999,
      rating: 4.7
    },
    {
      id: 'cw2',
      image: "https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f8.jpg",
      title: "Casual Bell Sleeves Embroidered Top",
      price: 699,
      rating: 4.7
    },
    {
      id: 'cw3',
      image: "https://fashions.stylevibe.in/wp-content/uploads/2024/06/item008.jpg",
      title: "Copper Ring for Women Jewellery",
      price: 549,
      rating: 4.7
    },
    {
      id: 'cw4',
      image: "https://fashions.stylevibe.in/wp-content/uploads/2024/06/item002.jpg",
      title: "Premium Helios Danglers For Women",
      price: 499,
      rating: 4.7
    },
    {
      id: 'cw5',
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-2.jpg",
      title: "Women Wedges Sandal",
      price: 666,
      rating: 4.7
    },
    {
      id: 'cw6',
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg",
      title: "Women Wedges Sandal",
      price: 777,
      rating: 4.7
    },
    {
      id: 'cw7',
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-16-2.jpg",
      title: "Women Oversized Fit Solid Casual Shirt",
      price: 1919,
      rating: 4.7
    },
    {
      id: 'cw8',
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-13-2.jpg",
      title: "Women Regular Floral Print Casual Shirt",
      price: 1945,
      rating: 4.7
    },
    {
      id: 'cw9',
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdlTlUpoQgAPIq6I6FNfkF0TiHA9vpTckO3WgKMQ1SpG1mGF3g2gzOi5udqtQArNP-78XJ_at8AcddD5-mJJWwfl4TtCoCzxqxSAhTJUNxNBb_C34DFKrzOw",
      title: "OGL-09 Casual Shoes for Women",
      price: 1999,
      rating: 4.7
    },
    {
      id: 'cw10',
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRh-cAjoZMIsqqxt2ycbqQBiWHmgl-29FaZikJx2UvvzX8yAW7Lbo52ULGZHsAb1eOtBOYTrM4Dh9C7ojjC0WaAkr0ihVeJfZqcop2VXZWRV-YGf8EZAz7C",
      title: "Stylish Comfort Sneakers For Women",
      price: 2250,
      rating: 4.7
    },
    {
      id: 'cw11',
      image: "https://funkytradition.com/cdn/shop/files/0_2019-Fashion-Round-Sunglasses-Women-Brand-Designer-Luxury-Metal-Sun-Glasses-Classic-Retro-Outdoor-Eyewear-Oculos_0079d389-153f-48a8-8d3a-928126597c19.jpg",
      title: "UV Protection Wayfarer Sunglasses",
      price: 724,
      rating: 4.7
    },
    {
      id: 'cw12',
      image: "https://sunski.com/cdn/shop/files/sunski_polarized_sunglasses_baia_24_1400x1100.jpg",
      title: "UV Protection Cat-eye Sunglasses",
      price: 599,
      rating: 4.7
    },
    {
      id: 'cw13',
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl35UNY-gYqncfh_nokPzg4SDtYWA1I5Af59ycsyUAjiNiAhoOkfJR-F0BasogBBRNdhzsiO_Qjjzs1sarT0LX9xKNXDf_hpyJdrM2hHdwThyzwJpBPKnz",
      title: "Analog Watch - For Women",
      price: 1450,
      rating: 4.7
    },
    {
      id: 'cw14',
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRws8XL7D0q9LXHrOsmLrPbKXj0GL8IkdX7GfFVoAzDfK9gLM9-Nt1hKPs6kkQXFV4USn5UvK7FM9hUZdX0pw8BhMj11-f_hTIGJU-GykfsvTSJwZ2dNYZxmg",
      title: "Izzy Analog Watch - For Women ES4782",
      price: 2999,
      rating: 4.7
    },
    {
      id: 'cw15',
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQX7L1qRYDmB95S2lFXDUPpr5u-cdxClRKS49TH8At7CpDS4vtbGZkw8UG5gbXtlo1_6pCsab1MCX1AUhfTUz3Rr1vSy88g9LN7UCPUFiDxWsRT9oiSjdHfqg",
      title: "Stylish Trending Sneakers For Women",
      price: 3199,
      rating: 4.7
    },
    {
      id: 'cw16',
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGHbg9rysF-ev3QU9QUioBwDUq0D4jodklJl3Zh8qsxZ_PojMY9pHL-Ay_5GpNFxKuHB8iH-oYT3HSp3C8PEpyFyoK08fHd4Nh4rzeoS0d",
      title: "CAMP-CLINT Sneakers For Women",
      price: 2999,
      rating: 4.7
    }
  ];

  const btnclick = (event) => {
    if (!user) {
      alert('Please login first to add items to your cart.');
      navigate1('/login');
      return;
    }
    const clickedBtn = event.target;
    if(clickedBtn.innerText === "Go to Cart") {
      navigate2('/cart');
      return;
    }
    const value = clickedBtn.value;
    const imgElement = document.getElementById(value).querySelector("img");
    const src = imgElement.getAttribute("src") || "";
    const description = document.getElementById(clickedBtn.getAttribute("data-text")).innerText || "";
    const str = document.getElementById(clickedBtn.getAttribute("data-amount")).innerText || "";
    const number = str.match(/\d+/g);
    const result = number ? number.join("") : "";
    const amount = parseInt(result);
    const dataToSend = {
      image: src,
      description: description,
      priceperitem: Number(amount),
    };

    addToCart(dataToSend);
    clickedBtn.innerText = "Go to Cart";
  };

  const renderProduct = (product, index) => (
    <div key={product.id} className="product-item">
      <div className="card" id={product.id}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <div id={`t${product.id}`}>{product.title}</div>
        <div className='gridd'>
          <div id={`a${product.id}`}>Rs.{product.price}</div>
          <div>
            <button 
              className='cartbtn' 
              onClick={btnclick} 
              value={product.id} 
              data-text={`t${product.id}`} 
              data-amount={`a${product.id}`}
            >
              Add to cart
            </button>
          </div>
          <div>{product.rating}<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
        </div>
      </div>
    </div>
  );

  return(
    <>
      <div className="home1">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="ride">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="9706877.jpg" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption">
                <p>Step into your power with fashion <br /> that turns heads, breaks norms,  <br />and defines your vibe</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="9701606.jpg" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption" style={{ margin: '0px 0px 0px 350px' }} >
                <p style={{ color: 'white' }}>Where classic elegance <br />meets modern fashion flair</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="handsome-tourist-straw-hat-put-sunglasses-summer-vacation-standing-blue-background.jpg" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption">
                <p>Effortless fashion for <br /> everyday statement looks</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='Line'>
        <div className='flexbox'>
          <h1>MENS FASHION</h1>
        </div>
      </div>

      <div className="product-grid">
        {mensProducts.map(renderProduct)}
      </div>

      <div className='Line'>
        <div className='flexbox'>
          <h1>WOMENS FASHION</h1>
        </div>
      </div>

      <div className="product-grid">
        {womensProducts.map(renderProduct)}
      </div>

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
    </>
  );
};

export default Shop;
