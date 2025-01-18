import React from 'react'
import "./index.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Leadership = () => {
  return (
    <div className="product py-5">
      <div className="container">
        <div className='text-center mb-5'>
             <span className="Popular-Products">Team</span>
      <h1 className="Our-Products">Leadership</h1>
        </div>
     
      <div className="row">
      <div className="col-4">
<img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" width={300}/>
<div className="texts">
   <h2>
John Rooster
</h2>
<span className='span-text'>Co-Founder, President</span>
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> 


</div>
        </div>
        <div className="col-4">
<img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" width={300}/>
<div className="texts">
   <h2>
   Tom Sharp
</h2>
<span className='span-text'>Co-Founder, COO</span>
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> 

</div>
        </div>
        <div className="col-4">
<img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" width={300}/>
<div className="texts">
   <h2> Winston Hodson</h2>
<span className='span-text'>Marketing</span>  
<p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p> 
</div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Leadership