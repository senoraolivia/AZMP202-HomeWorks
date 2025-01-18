// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css"

// const Proficiency = () => {
//   const skills = [
//     { name: "Frontend/Design", percentage: 60, color: "#8c80ff" },
//     { name: "Backend", percentage: 80, color: "#8c80ff" },
//     { name: "Programming", percentage: 70, color: "#8c80ff" },
//   ];

//   return (
//     <section className="py-5">   
//       <div className="container">
//         <h1 className="text-left">Proficiency</h1>
//         <div>
//           {skills.map((skill, index) => (
//             <div key={index} className="mb-4">
//               <h5>{skill.name}</h5>
//               <div className="progress" style={{ height: "10px" }}>
//                 <div
//                   className="progress-bar"
//                   role="progressbar"
//                   style={{
//                     width: `${skill.percentage}%`,
//                     backgroundColor: skill.color,
//                   }}
//                   aria-valuenow={skill.percentage}
//                   aria-valuemin="0"
//                   aria-valuemax="100"
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Proficiency;
