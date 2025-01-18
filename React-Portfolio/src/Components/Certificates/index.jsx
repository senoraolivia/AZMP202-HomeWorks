import React from 'react'
import HTMLandCSS from "./img/image2.png"
import score from "./img/image.png"
import ba from "./img/image3.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const MyCertificates = () => {
  return (
    <div className='div-all'>
          <div className="container py-5 ">
        <h1 className='text-center' styles={{marginBottom:"30px"}}>Certificates</h1>
      <div className="row align-items-center" style={{flexDirection:"column"}}>
        <div className="col-md-6" style={{width:"1000px",padding:"60 0"}}>
          <h2 >Frontend & Business Analytics</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae esse illo? Omnis quod incidunt facilis maxime nulla voluptatem reprehenderit ipsam consectetur corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla officiis cum qui dicta molestias laudantium, totam neque perspiciatis enim tenetur, temporibus doloribus sapiente.</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center aligh-items-center " style={{gap:"3rem"}}>
                 <img src={HTMLandCSS} alt="HTML and CSS" width={400}/>
          <img src={score} alt="score" width={400} />
          <img src={ba} alt="score" width={400} />
       
        </div>
      </div>
    </div> 
    </div>
 
  )
}

export default MyCertificates;
