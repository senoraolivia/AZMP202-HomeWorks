import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const HomePart3 = () => {


  return (
    <div className="hero-section position-relative text-white">
      <img
        className="img-fluid w-100"
        src="https://preview.colorlib.com/theme/selling/images/hero_2.jpg"
        alt="Shopping"
        style={{
          filter: 'brightness(50%)',
          maxHeight: '95vh',
          objectFit: 'cover',
        }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <p>Special Promo</p>
        <h1 className="logo-text">Summer Sale</h1>
        <p className="fs-5 mb-4">
          Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
        </p>
        <div className="d-flex justify-content-center mb-4">
          
        </div>
        <button className="btn btn-Shop-Now">Shop Now</button>
      </div>
    </div>
  );
};

export default HomePart3;           