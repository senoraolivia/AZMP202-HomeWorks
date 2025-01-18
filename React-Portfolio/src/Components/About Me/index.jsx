import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const AboutMe = () => {
  return (
    <div className='main-1'>
        <h1 className="text-center text-dark">About Me</h1>
        <section className="d-flex align-items-center justify-content-center ">
      <img style={{width:"700px",height:"700px"}}
        src="https://static.vecteezy.com/system/resources/previews/023/234/055/non_2x/a-business-woman-avatar-of-a-brunette-girl-red-lipstick-on-the-lips-illustration-for-banner-or-poster-on-white-flat-design-modern-colors-vector.jpg"
        alt="Coding GIF"
        className="img-fluid me-4"
       
      />
      <div>
          <h2 className="text-center">Ulviyya Teymurzade</h2>
          <p className="p-4">
          
I am a dedicated student with a deep passion for both front-end development and business analytics, eager to explore and master the unique aspects of these diverse fields. My curiosity drives me to understand how technology and data can come together to solve complex business challenges. I am currently working on ambitious projects that allow me to develop practical skills in both domains, aiming to make a meaningful impact. With a long-term vision of becoming the CEO of a leading American company within the next 10 years, I am committed to continuous growth and strategic planning. I believe in combining technical expertise with a strong business acumen to drive innovation and success. My journey is guided by a desire to bridge creativity, technology, and leadership in transformative ways.
          </p>
          <div className="d-flex justify-content-center align-items-center">
          </div>
       
      </div>
    
    </section> 
    </div>
   
  )
}

export default AboutMe