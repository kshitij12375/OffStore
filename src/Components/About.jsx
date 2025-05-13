import './About.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import picture2 from '../assets/picture2.avif';
import picture3 from '../assets/picture3.avif';
import picture4 from '../assets/picture4.avif';
import picture5 from '../assets/picture5.avif';
import picture6 from '../assets/picture6.avif';
import picture7 from '../assets/picture7.avif';
import picture8 from '../assets/picture8.avif';
import picture9 from '../assets/picture9.avif';
import mem1 from '../assets/mem1.jpg';
import mem2 from '../assets/mem2.jpg';
import mem3 from '../assets/mem3.jpg';
import mem4 from '../assets/mem4.jpg';

const About = () => { 
  return (
    <div className="body">
      {/* Hero Section */}
      <div className="image-container">
        <img src={picture2} alt="Hero" />
        <div className="image-text">
          <h1 className="heading1">Shop smart. Live better.</h1>
          <p className="heading2">Luxury is not a price. It's an experience.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="image-container2">
        <img src={picture3} alt="About" />
        <div className="image-text2">
          <h1>Who We Are</h1>
          <p>
            At OffStore, we create stylish, comfortable clothing that lets you express who you are. Our collections blend timeless design with modern trends — made for everyday wear, big moments, and everything in between.
          </p>
          <p>
            From streetwear staples to elegant essentials, OffStore brings together fashion-forward pieces that celebrate both comfort and creativity. Our team is always working behind the scenes to bring you the latest trends, responsibly made and thoughtfully designed.
          </p>
          <p>
            Thank you for being part of our journey. Here's to celebrating confidence, one outfit at a time.
          </p>
          <div className="moving-container">
            <p>Style that speaks, comfort that lasts — discover your signature look today!</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="image-container3">
        <div className="container1">
          <img src={picture4} alt="Free Shipping" />
          <div className="label1">
            <p>Free Shipping</p>
          </div>
        </div>
        <div className="container1">
          <img src={picture5} alt="Online Order" />
          <div className="label2">
            <p>Online Order</p>
          </div>
        </div>
        <div className="container1">
          <img src={picture6} alt="Save Money" />
          <div className="label3">
            <p>Save Money</p>
          </div>
        </div>
        <div className="container1">
          <img src={picture7} alt="Promotions" />
          <div className="label4">
            <p>Promotions</p>
          </div>
        </div>
        <div className="container1">
          <img src={picture8} alt="Happy Sale" />
          <div className="label5">
            <p>Happy Sale</p>
          </div>
        </div>
        <div className="container1">
          <img src={picture9} alt="24/7 Support" />
          <div className="label6">
            <p>24/7 Support</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-container">
        <h2>Meet Our Team</h2>
        <div className="members-container">
          <div className="members-container1">
            <img src={mem1} alt="Kshitij Kumar Srivastava" />
            <div>
              <p>Kshitij Kumar Srivastava</p>
              <p>Lead Developer</p>
            </div>
          </div>
          <div className="members-container1">
            <img src={mem2} alt="Akshat Vishnoi" />
            <div>
              <p>Akshat Vishnoi</p>
              <p>Lead Developer</p>
            </div>
          </div>
          <div className="members-container1">
            <img src={mem3} alt="Sanskriti Singh" />
            <div>
              <p>Sanskriti Singh</p>
              <p>Developer</p>
            </div>
          </div>
          <div className="members-container1">
            <img src={mem4} alt="Kavya Singh" />
            <div>
              <p>Kavya Singh</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container4">
        <div className="image-text3">
          <div>
            <p>Sign Up for Newsletters</p>
            <span>Get E-mail updates about our latest shop and special offers</span>
          </div>
          <div className="signup">
            <input type="email" placeholder="Your email address" className="signup-input" />
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer1">
          <div>
            <div id="logo">OffStore</div>
            <p>Your one-stop destination for trendy fashion and accessories at affordable prices.</p>
            <div className="social-icons">
              <i><FaFacebookF /></i>
              <i><FaInstagram /></i>
              <i><FaTwitter /></i>
              <i><FaYoutube /></i>
            </div>
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
            <p>New York, USA</p>
            <p>support@offstore.com</p>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <p>Follow us on social media for the latest updates, style tips, and exclusive offers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
