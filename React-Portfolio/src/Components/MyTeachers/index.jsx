import React from "react";


const BestTeachers = () => {
  

  return (
   <div className="sec2">
    <h1 style={{textAlign:"center",margin:"40px 0"}}>Achievment</h1>
    <div className="row" style={{display:"flex",}}>
    <div className="col-6" style={{flexDirection:"column"}}>
      <div className="img1">
        <img style={{width:"400px",height:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcaSONruAYyLRlWYtqYn227FsH3P2VUcghA&s" alt="" />
      </div>
      <div className="text1">
        <p>
        In April 12, 2022, I was honored to be selected as one of the 20 finalists from Azerbaijan for the FLEX (Future Leaders Exchange) program. This prestigious program, sponsored by the U.S. Department of State, offers high school students from various countries the opportunity to spend an academic year in the United States. Participants live with American host families, attend U.S. high schools, and engage in cultural exchange activities.</p>
      </div>
    </div>
    <div className="col-6" style={{flexDirection:"column",gap:"2rem",justifyContent:"space-between"}}>
      <div className="text2">
        <p>The program focuses on fostering mutual understanding between nations and equipping young leaders with the skills needed to contribute to their communities. Being selected as a FLEX finalist is a testament to academic excellence, leadership potential, and a commitment to community service. For me, the experience was transformative, broadening my perspectives, enhancing my adaptability, and enriching my cultural understanding. FLEX alumni often go on to become influential figures in their respective countries, advocating for positive change and collaboration.</p>
      </div>
      <div className="img2">
        <img style={{width:"500px",height:"500px"}}src="https://americancouncils.org.ua/wp-content/uploads/2024/08/Image-1.png" alt="" />
      </div>
  
    </div>
    </div>
   </div>
  );
};

export default BestTeachers;
