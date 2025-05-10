import './Shop.css';

import rating from '../assets/rating.png';

import cart from '../assets/cart.png';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from './CartContext';
import { auth } from './firebase';
const Shop = () => {
  const { addToCart } = useCart();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const user = auth.currentUser;


  const btnclick = (event) => {
    if (!user) {
      alert('Please login first to add items to your cart.');
      navigate1('/login');
      return;
      }
    const clickedBtn = event.target;
    const value = clickedBtn.value;
    const imgElement = document.getElementById(value)?.querySelector("img");
    const src = imgElement?.getAttribute("src") || "";
    const description = document.getElementById(clickedBtn.getAttribute("data-text"))?.innerText || "";
    const str = document.getElementById(clickedBtn.getAttribute("data-amount"))?.innerText || "";
    const number = str.match(/\d+/g); 
    const result = number ? number.join("") : "";
    const amount = parseInt(result);
    const dataToSend = {
      image: src,
      description: description,
      priceperitem: Number(amount),
    };

    addToCart(dataToSend);
    navigate2("/cart");
  };
   return(
     <>
       <div className="home1">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="ride">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="src\assets\9706877.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption">
                <p>Step into your power with fashion <br /> that turns heads, breaks norms,  <br />and defines your vibe</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="src\assets\9701606.jpg" className="d-block w-100" alt="..."></img>
              <div className="carousel-caption" style={{ margin: '0px 0px 0px 350px' }} >
                <p style={{ color: 'white' }}>Where classic elegance <br />meets modern fashion flair</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="src\assets\handsome-tourist-straw-hat-put-sunglasses-summer-vacation-standing-blue-background.jpg" className="d-block w-100" alt="..."></img>
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
          <div id='tm1'>Men's Casual Denim Shirt</div>
          <div className='gridd'>
            <div id='am1'>Rs.700</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm1' data-text="tm1" data-amount="am1">Add to cart</button>
            </div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details">
        <div id='tm2'>Men's Casual Check Shirt</div>
          <div className='gridd'>
           <div id="am2">Rs.460</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm2' data-text="tm2" data-amount="am2">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cm3'><img src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTQ2MzI2NHx8ZW58MHx8fHx8" alt="" /></div>
        <div className="card flexbox" id='cm4'><img src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZU11M2RUa3MtQk18fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="details">
          <div id='tm3'>Round Neck Slimfit Tshirt</div>
          <div className='gridd'>
            <div id='am3'>Rs.460</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm3' data-text="tm3" data-amount="am3">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div></div>
        <div className="details" id='tm4'><div>Round Neck Slimfit Tshirt</div>
          <div className='gridd'>
            <div id='am4'>Rs.450</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm4' data-text="tm4" data-amount="am4">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div></div>
        <div className="card flexbox" id='cm5'><img src="https://media.istockphoto.com/id/182422958/photo/plain-white-t-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=1-XoGdX1DxIEo_4GI7CVAOuoRd1EJBA4CKQ1dt68Ccg=" alt="" /></div>
        <div className="card flexbox" id='cm6'><img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODQwMDgzODl8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="details" id='tm5'><div>Solid White Round Neck Tshirt</div>
          <div className='gridd'>
            <div id='am5'>Rs.350</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm5' data-text="tm5" data-amount="am5">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div></div>
        <div className="details" id='tm6'><div>Men's Fashion Trendy Tshirt</div>
          <div className='gridd'>
            <div id='am6'>Rs.650</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm6' data-text="tm6" data-amount="am6">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div></div>
        <div className="card flexbox" id='cm7'><img src="https://images.unsplash.com/photo-1490168105446-f43395eb50b5?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTcyMjY1MHx8ZW58MHx8fHx8" alt="" /></div>
        <div className="card flexbox" id='cm8'><img src="https://images.unsplash.com/photo-1464278860589-b2ed64f87e22?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDI4NzA2fHxlbnwwfHx8fHw%3D" alt="" /></div>
        <div className="details" id='tm7'><div>Men Lace up Sneaker Shoes</div>
          <div className='gridd'>
            <div id='am7'>Rs.1450</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm7' data-text="tm7" data-amount="am7">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div></div>
        <div className="details" id='tm8'>Men Leather Sneaker Shoes<div></div>
          <div className='gridd'>
            <div id='am8'>Rs.2559</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm8' data-text="tm8" data-amount="am8">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div></div>
          <div className="card flexbox" id='cm9'><img src="https://images.unsplash.com/photo-1512755051947-dea0029e93ad?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE1MTA0MTh8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm10'><img src="https://images.unsplash.com/photo-1527016021513-b09758b777bd?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTM2MTIxMXx8ZW58MHx8fHx8" alt="" /></div>
        <div className="details" id='tm9'>
          <div>Mens Trendy Overcoat Jacket</div>
          <div className='gridd'>
            <div id='am9'>Rs.3280</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm9' data-text="tm9" data-amount="am9">Add to cart</button>
            </div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tm10'>
        <div>Mens Trendy Denim Shirt</div>
          <div className='gridd'>
            <div id='am10'>Rs.1380</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm10' data-text="tm10" data-amount="am10">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cm11'><img src="https://images.unsplash.com/photo-1581068505339-d155712f0add?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8bkt3OXFTSGUtcHd8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm12'><img src="https://images.unsplash.com/photo-1619466122087-e1ff06cf234b?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8d2pLcklEVzc5RUV8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="details" id='tm11'>
          <div>Mens Stylish Street Shoes</div>
          <div className='gridd'>
            <div id='am11'>Rs.1899</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm11' data-text="tm11" data-amount="am11">Add to cart</button>
            </div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tm12'>
        <div>Mens Stylish Street Shoes</div>
          <div className='gridd'>
            <div id='am12'>Rs.1899</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm12' data-text="tm12" data-amount="am12">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cm13'><img src="https://images.unsplash.com/photo-1496637721836-f46d116e6d34?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTAyNTU2Mjl8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm14'><img src="https://images.unsplash.com/photo-1563891217861-7924b471afb3?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTY3Nzc3N3x8ZW58MHx8fHx8" alt="" /></div>
        <div className="details" id='tm13'>
          <div>100% UV protected Wayfarer Sunglasses</div>
          <div className='gridd'>
            <div id='am13'>Rs.750</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm13' data-text="tm13" data-amount="am13">Add to cart</button>
            </div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tm14'>
        <div>UV protected Trendy Sunglasses</div>
          <div className='gridd'>
            <div id='am14'>Rs.450</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm14' data-text="tm14" data-amount="am14">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        
        <div className="card flexbox" id='cm15'><img src="https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE3MjE3NzZ8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="card flexbox" id='cm16'><img src="https://images.unsplash.com/photo-1588099768550-4014589e03e0?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTk4Mzk3MHx8ZW58MHx8fHx8" alt="" /></div>
        <div className="details" id='tm15'>
          <div>Men's Magnum casual Sneakers</div>
          <div className='gridd'>
            <div id='am15'>Rs.3750</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm15' data-text="tm15" data-amount="am15">Add to cart</button>
            </div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tm16'>
        <div>Men suede Sneaker shoes</div>
          <div className='gridd'>
            <div id='am16'>Rs.3450</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cm16' data-text="tm16" data-amount="am16">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div id="womensFashion" className="grid">
        <div className="card flexbox" id='cw1'><img src="https://images.unsplash.com/photo-1634412327877-836164201d16?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NTQzOTM0OTR8fGVufDB8fHx8fA%3D%3D"alt="" /></div>
        <div className="card flexbox" id='cw2'><img src="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/f8.jpg" alt="" /></div>
        <div className="details" id='tw1'>
          <div>Women Regular Fit Solid Formal Shirt</div>
          <div className='gridd'>
            <div id='aw1'>Rs.999</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw1' data-text="tw1" data-amount="aw1">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw2'>
        <div>Casual Bell Sleeves Embroidered Top</div>
          <div className='gridd'>
            <div id='aw2'>Rs.699</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw2' data-text="tw2" data-amount="aw2">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cw3'><img src="https://fashions.stylevibe.in/wp-content/uploads/2024/06/item008.jpg" alt="" /></div>
        <div className="card flexbox" id='cw4'><img src="https://fashions.stylevibe.in/wp-content/uploads/2024/06/item002.jpg" alt="" /></div>
        <div className="details" id='tw3'>
        <div>Copper Ring for Women Jewellery </div>
          <div className='gridd'>
            <div id='aw3'>Rs.549</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw3' data-text="tw3" data-amount="aw3">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw4'>
        <div>Premium Helios Danglers For Women </div>
          <div className='gridd'>
            <div id='aw4'>Rs.499</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw4' data-text="tw4" data-amount="aw4">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cw5'><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-2.jpg"alt="" /></div>
        <div className="card flexbox" id='cw6'><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg"alt="" /></div>
        <div className="details" id='tw5'>
        <div>Women Wedges Sandal</div>
          <div className='gridd'>
            <div id='aw5'>Rs.666</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw5' data-text="tw5" data-amount="aw5">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw6'>
        <div>Women Wedges Sandal </div>
          <div className='gridd'>
            <div id='aw6'>Rs.777</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw6' data-text="tw6" data-amount="aw6">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
       <div className="card flexbox" id='cw7'><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-16-2.jpg"alt="" /></div>
        <div className="card flexbox" id='cw8'><img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-13-2.jpg"alt="" /></div>
        <div className="details" id='tw7'>
        <div>Women Oversized Fit Solid Casual Shirt</div>
          <div className='gridd'>
            <div id='aw7'>Rs. 1919</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw7' data-text="tw7" data-amount="aw7">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw8'>
        <div>Women Regular Floral Print Casual Shirt</div>
          <div className='gridd'>
            <div id='aw8'>Rs.1945</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw8' data-text="tw8" data-amount="aw8">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cw9'><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdlTlUpoQgAPIq6I6FNfkF0TiHA9vpTckO3WgKMQ1SpG1mGF3g2gzOi5udqtQArNP-78XJ_at8AcddD5-mJJWwfl4TtCoCzxqxSAhTJUNxNBb_C34DFKrzOw"alt="" /></div>
        <div className="card flexbox" id='cw10'><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRh-cAjoZMIsqqxt2ycbqQBiWHmgl-29FaZikJx2UvvzX8yAW7Lbo52ULGZHsAb1eOtBOYTrM4Dh9C7ojjC0WaAkr0ihVeJfZqcop2VXZWRV-YGf8EZAz7C" alt="" /></div>
        <div className="details" id='tw9'>
          <div>OGL-09 Casual Shoes for Women </div>
          <div className='gridd'>
            <div id='aw9'>Rs.1999</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw9' data-text="tw9" data-amount="aw9">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw10'>
        <div>Stylish Comfort Sneakers For Women</div>
          <div className='gridd'>
            <div id='aw10'>Rs.2250</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw10' data-text="tw10" data-amount="aw10">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cw11'><img src="https://funkytradition.com/cdn/shop/files/0_2019-Fashion-Round-Sunglasses-Women-Brand-Designer-Luxury-Metal-Sun-Glasses-Classic-Retro-Outdoor-Eyewear-Oculos_0079d389-153f-48a8-8d3a-928126597c19.jpg?v=1723512244"alt="" /></div>
        <div className="card flexbox" id='cw12'><img src="https://sunski.com/cdn/shop/files/sunski_polarized_sunglasses_baia_24_1400x1100.jpg?v=1721341129" alt="" /></div>
        <div className="details" id='tw11'>
          <div> UV Protection Wayfarer Sunglasses</div>
          <div className='gridd'>
            <div id='aw11'>Rs.724</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw11' data-text="tw11" data-amount="aw11">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw12'>
        <div> UV Protection Cat-eye Sunglasses </div>
          <div className='gridd'>
            <div id='aw12'>Rs.599</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw12' data-text="tw12" data-amount="aw12">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cw13'><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl35UNY-gYqncfh_nokPzg4SDtYWA1I5Af59ycsyUAjiNiAhoOkfJR-F0BasogBBRNdhzsiO_Qjjzs1sarT0LX9xKNXDf_hpyJdrM2hHdwThyzwJpBPKnz"alt="" /></div>
        <div className="card flexbox" id='cw13'><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRws8XL7D0q9LXHrOsmLrPbKXj0GL8IkdX7GfFVoAzDfK9gLM9-Nt1hKPs6kkQXFV4USn5UvK7FM9hUZdX0pw8BhMj11-f_hTIGJU-GykfsvTSJwZ2dNYZxmg" alt="" /></div>
        <div className="details" id='tw13'>
          <div>Analog Watch - For Women </div>
          <div className='gridd'>
            <div id='aw13'>Rs.1450</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw13' data-text="tw13" data-amount="aw13">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw14'>
        <div>Izzy Analog Watch - For Women ES4782</div>
          <div className='gridd'>
            <div id='aw14'>Rs.2999</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw14' data-text="tw14" data-amount="aw14">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="card flexbox" id='cw15'><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQX7L1qRYDmB95S2lFXDUPpr5u-cdxClRKS49TH8At7CpDS4vtbGZkw8UG5gbXtlo1_6pCsab1MCX1AUhfTUz3Rr1vSy88g9LN7UCPUFiDxWsRT9oiSjdHfqg"alt="" /></div>
        <div className="card flexbox" id='cw16'><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGHbg9rysF-ev3QU9QUioBwDUq0D4jodklJl3Zh8qsxZ_PojMY9pHL-Ay_5GpNFxKuHB8iH-oYT3HSp3C8PEpyFyoK08fHd4Nh4rzeoS0d" alt="" /></div>
        <div className="details" id='tw15'>
          <div>Stylish Trending Sneakers For Women</div>
          <div className='gridd'>
            <div id='aw15'>Rs.3199</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw15' data-text="tw15" data-amount="aw15">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
          </div>
        </div>
        <div className="details" id='tw16'>
        <div>CAMP-CLINT Sneakers For Women</div>
          <div className='gridd'>
            <div id='aw16'>Rs. 2999</div>
            <div ><button className='cartbtn' onClick={btnclick} value='cw16' data-text="tw16" data-amount="aw16">Add to cart</button></div>
            <div >4.7<img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="" /></div>
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
