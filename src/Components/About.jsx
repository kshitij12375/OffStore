import './About.css';
import picture2 from '../assets/picture2.avif';
import picture3 from '../assets/picture3.avif';
import picture4 from '../assets/picture4.avif';
import picture5 from '../assets/picture5.avif';
import picture6 from '../assets/picture6.avif';
import picture7 from '../assets/picture7.avif';
import picture8 from '../assets/picture8.avif';
import picture9 from '../assets/picture9.avif';
import picture10 from '../assets/picture10.jpg';

const About = () => { 
    return (
        <div className="body">
            <div className="image-container">
                <img src={picture2} alt="aboutImage" />
                <div className="image-text" >
                    <h1 className="heading1">"Shop smart. Live better."</h1>
                    <p className="heading2">"Luxury is not a price. It's an experience."</p>
                </div>
            </div>
            <div className="image-container2">
                <img src={picture3} alt="image2" />
                <div className="image-text2">
                    <h1>Who are we!</h1>
                    <p>
                        At offStore, we create stylish, comfortable clothing that lets you express who you are. Our collections blend timeless design with modern trends — made for everyday wear, big moments, and everything in between.
                        <br />
                        From streetwear staples to elegant essentials, offStore brings together fashion-forward pieces that celebrate both comfort and creativity. Our team is always working behind the scenes to bring you the latest trends, responsibly made and thoughtfully designed.
                        <br />
                        Thank you for being part of our journey. Here's to celebrating confidence, one outfit at a time.
                    </p>
                    <div className="moving-container">
                     <p>Style that speaks, comfort that lasts — discover your signature look today!</p>
                    </div>
                </div>
            </div>
            <div className="image-container3">
                <div className="container1">
                    <img src={picture4} alt="image1" />
                    <div className="label1">
                        <p>Free Shipping</p>
                    </div>
                </div>
                <div className="container1">
                <img src={picture5} alt="image2" />
                <div className="label2">
                    <p>Online Order</p>
                    </div>
                </div>
                <div className="container1">
                <img src={picture6} alt="image3" />
                <div className="label3">
                    <p>Save Money</p>
                </div>
                </div>
                <div className="container1">
                <img src={picture7} alt="image4" />
                <div className="label4">
                    <p>Promotions</p>
                </div>
                </div>
                <div className="container1">
                <img src={picture8} alt="image5" />
                <div className="label5">
                    <p>Happy Sale</p>
                </div>
                </div>
                <div className="container1">
                <img src={picture9} alt="image6" />
                <div className="label6">
                    <p>24/7 Support</p>
                </div>
                </div>
                </div>
               <div className="container4">
                  <img src={picture10} alt="image7" />
                  <div className="image-text3">
                    <div>
                            <p>Sign Up for Newsletters</p>
                            <span>Get E-mail updates about our latest shop and special offers </span>
                            </div>
                            <div className="signup">
                            <input type="email" placeholder="Your email address" className="signup-input"/>
                            <button className="signup-button">Sign Up</button>
                            </div>
                  </div>
               </div>
               <div className="footer">
  <div className="footer1">
    <div id="logo">
      <div style={{ fontFamily: "'Irish Grover', cursive", fontSize: "28px" }}>OffStore</div>
      
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>FAQs</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>+91 1234567890</p>
      <p>Address: New York, USA</p>
      <p>✉️ Email: support@offstore.com</p>
    </div>

    <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  </div>

          </div>
        </div>

    )
}
export default About;
