import "./Home.css";
import { useNavigate } from "react-router-dom";

import cart from "../assets/cart.png";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/shop");
    };
  return (
    <>
      <div className="home1">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src\assets\9706877.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="src\assets\9701606.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>

            <div className="carousel-item">
              <img
                src="src\assets\handsome-tourist-straw-hat-put-sunglasses-summer-vacation-standing-blue-background.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="Line">
        <h1>New Collections</h1>
      </div>
      <div className="home2">
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n7.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n1.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n3.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n4.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n5.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n6.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n8.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/n2.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f5.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f6.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f7.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f5.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f1.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f4.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f3.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card2">
            <img
              src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f2.jpg"
              alt="shirt4"
            ></img>
            <div className="card3">
              <p id="h">Mast and Habour</p>
              <p>Pure Cotton and tailored Shirt</p>
              <p id="w">Rs.999</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home3">
        <div className="box1">
          <h2>Exclusive Sale</h2>
          <h2>Upto 70% Off</h2>
        </div>
        <div className="box2">
          <div className="box3">
            

            <button onClick={handleClick} > Shop Now</button>
          </div>
          <div className="box4">
            <button onClick={handleClick} >Shop Now</button>
          </div>
        </div>
        <div className="box5">
          <div className="box6">
            <button onClick={handleClick} >Explore</button>
          </div>
          <div className="box7">
            <button onClick={handleClick} >Explore</button>
          </div>
          <div className="box8">
            <button onClick={handleClick}  >Explore</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <div id="logo">
            <div
              style={{
                fontFamily: "'Irish Grover', cursive",
                fontSize: "28px",
              }}
            >
              OffStore
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
    </>
  );
};
export default Home;
