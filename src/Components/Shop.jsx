import './Shop.css';
import tshirt1 from '../assets/tshirt1.jpg';
import tshirt3 from '../assets/tshirt3.jpg';
import tshirt4 from '../assets/tshirt4.webp';
import tshirt5 from '../assets/tshirt5.webp';
import rating from '../assets/rating.png';
import cart from '../assets/cart.png';
const Shop = () => {
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
        <div className="card flexbox" id='cm1'><img src={tshirt1} alt="" /></div>
        <div className="card flexbox" id='cm2'><img src={tshirt3} alt="" /></div>
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
        <div className="card flexbox"><img src={tshirt1} alt="" /></div>
        <div className="card flexbox"><img src={tshirt3} alt="" /></div>
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
        <div className="card flexbox"><img src={tshirt1} alt="" /></div>
        <div className="card flexbox"><img src={tshirt3} alt="" /></div>
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
        <div className="card flexbox"><img src={tshirt1} alt="" /></div>
        <div className="card flexbox"><img src={tshirt3} alt="" /></div>
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
      </div>
      <div id="womensFashion" className="grid">
        <div className="card flexbox"><img src={""}alt="" /></div>
        <div className="card flexbox"><img src={""} alt="" /></div>
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
        <div className="card flexbox"><img src={""}alt="" /></div>
        <div className="card flexbox"><img src={""}alt="" /></div>
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
        <div className="card flexbox"><img src={""}alt="" /></div>
        <div className="card flexbox"><img src={""}alt="" /></div>
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
       <div className="card flexbox"><img src={""}alt="" /></div>
        <div className="card flexbox"><img src={""}alt="" /></div>
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
     </>
    );
};
export default Shop;
