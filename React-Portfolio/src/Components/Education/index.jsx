import React from "react";
import "./index.css"

const curses = [
  {
    name: "Code Academy",
    logo: "https://busy.az/storage/companies/1627049236code-academy-logo.jpg", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fcodelandia.edu.az%2F&is_from_rle",
  },
  {
    name: "Codelandia",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu_FagqViXA4MKFc9PZHqjWqToGcuHwILGA&s", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://www.instagram.com/code.edu.az/",
  },
];

const MyCurses = () => {
  return (
    <div className="cards-all">
        <div className="container my-5">
      <h1 className="text-center mb-4">
       Education
      </h1>
      <div className="row">
        {curses.map((curse, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="cards-img card shadow-sm h-100">
              <img
                src={curse.logo}
                className="card-img-top p-4"
                alt={`${curse.name} logo`}
              />
              <div className="card-body text-center">
                <h2 className="card-title">{curse.name}</h2>
                <p className="card-text">{curse.description}</p>
                <a href={curse.link} target="_blank" className="btn btn-primary">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyCurses;

