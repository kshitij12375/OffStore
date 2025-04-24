import './Home.css'
const Home =() => {

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
        <div className='Line'><h1>New Collections</h1></div>
        <div className="home2">
            <div className='card1'>
                <div className='card2'>
                    <img src="src\assets\shirt4.webp" alt="shirt4"></img>
                    </div>
            </div>
            <div className='card1'>
            <div className='card2'>
                    <img src="src\assets\shirt4.webp" alt="shirt4"></img>
                    </div>
            </div>
            <div className='card1'>
            <div className='card2'>
                    <img src="src\assets\shirt4.webp" alt="shirt4"></img>
                    </div>
            </div>
            <div className='card1'>
            <div className='card2'>
                    <img src="src\assets\shirt4.webp" alt="shirt4"></img>
                    </div>
            </div>
            <div className='card1'>
            <div className='card2'>
                    <img src="src\assets\shirt4.webp" alt="shirt4"></img>
                    </div>
            </div>
            </div>

        </>

 )
}
export default Home;