import './Shop.css';

import rating from '../assets/rating.png';

import cart from '../assets/cart.png';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from './CartContext';
import { auth } from './firebase';
const Shop = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const user = auth.currentUser;
if (!user) {
alert('Please login first to add items to your cart.');
navigate('/login');
return;
}

  const btnclick = (event) => {
    const clickedBtn = event.target;
    const value = clickedBtn.value;
    const imgElement = document.getElementById(value)?.querySelector("img");
    const src = imgElement?.getAttribute("src") || "";
    const description = document.getElementById(clickedBtn.getAttribute("data-text"))?.innerText || "";
    const amount = document.getElementById(clickedBtn.getAttribute("data-amount"))?.innerText || "";

    const dataToSend = {
      image: src,
      description: description,
      priceperitem: Number(amount),
    };

    addToCart(dataToSend);
    navigate("/cart");
  };
   return(
     <>
       <div className="home1">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="ride">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="src\assets\9706877.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="src\assets\9701606.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="src\assets\handsome-tourist-straw-hat-put-sunglasses-summer-vacation-standing-blue-background.jpg" className="d-block w-100" alt="..."></img>
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
      <div className='Line flexbox'>
      <div className='flexbox'><h1>MENS FASHION</h1><button class="btn btn-secondary dropdown-toggle dropdown no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Shirts</a></li>
    <li><a class="dropdown-item" href="#">TShirts</a></li>
    <li><a class="dropdown-item" href="#">Trousers</a></li>
    <li><a class="dropdown-item" href="#">Jeans</a></li>
  </ul>
  </button></div>
      <div className='flexbox'><h1>WOMENS FASHION</h1><button class="btn btn-secondary dropdown-toggle dropdown no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Tshirts</a></li>
    <li><a class="dropdown-item" href="#">Salwaar suits</a></li>
    <li><a class="dropdown-item" href="#">Jeans</a></li>
    <li><a class="dropdown-item" href="#">Traditionals</a></li>
  </ul>
  </button></div>
      </div>
      <div className="flexbox">
      <div id="MensFashion" className="grid">
        <div className="card flexbox" id='cm1'><img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="card flexbox" id='cm2'><img src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww" alt="" /></div>
        <div className="details">
          <div id='t1'>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div id='a1'>450</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm1' data-text="t1" data-amount="a1">Add to cart</button><img src={cart} alt="" />
            </div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div id='t2'>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
           <div id="a2">460</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm2' data-text="t2" data-amount="a2">Add to cart</button><img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTQ2MzI2NHx8ZW58MHx8fHx8" alt="" /></div>
        <div className="card flexbox"><img src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZU11M2RUa3MtQk18fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="details"><div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.460</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div></div>
        <div className="details"><div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div></div>
        <div className="card flexbox"><img src="https://media.istockphoto.com/id/182422958/photo/plain-white-t-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=1-XoGdX1DxIEo_4GI7CVAOuoRd1EJBA4CKQ1dt68Ccg=" alt="" /></div>
        <div className="card flexbox"><img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODQwMDgzODl8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="details"><div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div></div>
        <div className="details"><div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div></div>
        <div className="card flexbox"><img src="https://images.unsplash.com/photo-1490168105446-f43395eb50b5?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTcyMjY1MHx8ZW58MHx8fHx8" alt="" /></div>
        <div className="card flexbox"><img src="https://images.unsplash.com/photo-1464278860589-b2ed64f87e22?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDI4NzA2fHxlbnwwfHx8fHw%3D" alt="" /></div>
        <div className="details"><div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div></div>
        <div className="details"><div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div></div>
          <div className="card flexbox" id='cm1'><img src="https://images.unsplash.com/photo-1512755051947-dea0029e93ad?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE1MTA0MTh8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm2'><img src="https://images.unsplash.com/photo-1527016021513-b09758b777bd?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTM2MTIxMXx8ZW58MHx8fHx8" alt="" /></div>
        <div className="details">
          <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" />
            </div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cm1'><img src="https://images.unsplash.com/photo-1581068505339-d155712f0add?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8bkt3OXFTSGUtcHd8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm2'><img src="https://images.unsplash.com/photo-1619466122087-e1ff06cf234b?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8d2pLcklEVzc5RUV8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="details">
          <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" />
            </div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cm1'><img src="https://images.unsplash.com/photo-1496637721836-f46d116e6d34?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTAyNTU2Mjl8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm2'><img src="https://images.unsplash.com/photo-1563891217861-7924b471afb3?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTY3Nzc3N3x8ZW58MHx8fHx8" alt="" /></div>
        <div className="details">
          <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" />
            </div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        
        <div className="card flexbox" id='cm1'><img src="https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE3MjE3NzZ8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm2'><img src="https://images.unsplash.com/photo-1588099768550-4014589e03e0?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTk4Mzk3MHx8ZW58MHx8fHx8" alt="" /></div>
        <div className="details">
          <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" />
            </div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Cream Embroidered Polo Slim Fit Shirt</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
      </div>
      <div id="womensFashion" className="grid">
        <div className="card flexbox"><img src="https://images.unsplash.com/photo-1634412327877-836164201d16?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NTQzOTM0OTR8fGVufDB8fHx8fA%3D%3D"alt="" /></div>
        <div className="card flexbox"><img src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f8.jpg" alt="" /></div>
        <div className="details">
          <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://fashions.stylevibe.in/wp-content/uploads/2024/06/item008.jpg" alt="" /></div>
        <div className="card flexbox"><img src="https://fashions.stylevibe.in/wp-content/uploads/2024/06/item002.jpg" alt="" /></div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-2.jpg"alt="" /></div>
        <div className="card flexbox"><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg"alt="" /></div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
       <div className="card flexbox"><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-16-2.jpg"alt="" /></div>
        <div className="card flexbox"><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-13-2.jpg"alt="" /></div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdlTlUpoQgAPIq6I6FNfkF0TiHA9vpTckO3WgKMQ1SpG1mGF3g2gzOi5udqtQArNP-78XJ_at8AcddD5-mJJWwfl4TtCoCzxqxSAhTJUNxNBb_C34DFKrzOw"alt="" /></div>
        <div className="card flexbox"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRh-cAjoZMIsqqxt2ycbqQBiWHmgl-29FaZikJx2UvvzX8yAW7Lbo52ULGZHsAb1eOtBOYTrM4Dh9C7ojjC0WaAkr0ihVeJfZqcop2VXZWRV-YGf8EZAz7C" alt="" /></div>
        <div className="details">
          <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://funkytradition.com/cdn/shop/files/0_2019-Fashion-Round-Sunglasses-Women-Brand-Designer-Luxury-Metal-Sun-Glasses-Classic-Retro-Outdoor-Eyewear-Oculos_0079d389-153f-48a8-8d3a-928126597c19.jpg?v=1723512244"alt="" /></div>
        <div className="card flexbox"><img src="https://sunski.com/cdn/shop/files/sunski_polarized_sunglasses_baia_24_1400x1100.jpg?v=1721341129" alt="" /></div>
        <div className="details">
          <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl35UNY-gYqncfh_nokPzg4SDtYWA1I5Af59ycsyUAjiNiAhoOkfJR-F0BasogBBRNdhzsiO_Qjjzs1sarT0LX9xKNXDf_hpyJdrM2hHdwThyzwJpBPKnz"alt="" /></div>
        <div className="card flexbox"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRws8XL7D0q9LXHrOsmLrPbKXj0GL8IkdX7GfFVoAzDfK9gLM9-Nt1hKPs6kkQXFV4USn5UvK7FM9hUZdX0pw8BhMj11-f_hTIGJU-GykfsvTSJwZ2dNYZxmg" alt="" /></div>
        <div className="details">
          <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="card flexbox"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQX7L1qRYDmB95S2lFXDUPpr5u-cdxClRKS49TH8At7CpDS4vtbGZkw8UG5gbXtlo1_6pCsab1MCX1AUhfTUz3Rr1vSy88g9LN7UCPUFiDxWsRT9oiSjdHfqg"alt="" /></div>
        <div className="card flexbox"><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGHbg9rysF-ev3QU9QUioBwDUq0D4jodklJl3Zh8qsxZ_PojMY9pHL-Ay_5GpNFxKuHB8iH-oYT3HSp3C8PEpyFyoK08fHd4Nh4rzeoS0d" alt="" /></div>
        <div className="details">
          <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div>Mast and Harbour Striped Top</div>
          <div className='gridd'>
            <div>Rs.450</div>
            <div >Add to cart<img src={cart} alt="" /></div>
            <div >4.7<img src={rating} alt="" /></div>
          </div>
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
export default Shop;
