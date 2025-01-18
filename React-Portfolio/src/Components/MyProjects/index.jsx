// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import todo from "./img/Todo-app.png"
// import FloverShop from "./img/Flover-Shop.png"
// import RenderCards from "./img/render-cards.png"
// import "./index.css"

// const MyProjects = () => {
//   const projects = [
//     {
//       img: todo,
//       title: "Todo app react",
//       desc: "The To-Do App in React allows users to manage tasks easily. Users can add tasks, mark them as complete (with a strikethrough style), and delete them. The app saves tasks in localStorage, ensuring they persist after page reloads. It features a clean interface and uses React state and useEffect for functionality.",
//       link: "https://prismatic-seahorse-5d9af0.netlify.app",
//     },
//     {
//       img: FloverShop,
//       title: "Flover Website",
//       desc: "The site you've shared is a demo built using Vite and React. It showcases a custom design with interactive features, potentially focusing on sprinkles or unique visual elements. It’s hosted on Netlify and demonstrates front-end development concepts like component-based architecture in React, along with efficient bundling from Vite",
//       link: "https://6767fce6632143b214a3263a--bespoke-sprinkles-b8827a.netlify.app/",
//     },
//     {
//       img: RenderCards,
//       title: "Cars Website",
//       desc: "The site you've shared is a demo built using Vite and React. It showcases a custom design with interactive features, potentially focusing on sprinkles or unique visual elements. It’s hosted on Netlify and demonstrates front-end development concepts like component-based architecture in React, along with efficient bundling from Vite",
//       link: "https://example.com/project3",
//     },
//   ];

//   return (
//     <div className="container py-5">
//       <h1 className="text-center mb-4">My Projects</h1>
//       <div className="row">
//         {projects.map((project, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <Card className="h-60 shadow-sm">
//               <Card.Img variant="top" src={project.img} alt={project.title}/>
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text className="desc">{project.desc}</Card.Text>
//                 <Button
//                   variant="primary"
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View Project
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyProjects;
