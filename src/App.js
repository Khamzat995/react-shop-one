import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Products from "./Products";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import Basement from "./Basment";

function App () {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="products">
          <Products img={image1} price="146 591 руб." name="Apple MacBook Pro 13 Mid/ 512Gb" />
          <Products img={image2} price="161 991 руб." name="Apple MacBook Pro 13/ 1000 Gb" />
          <Products img={image3} price="103 151 руб." name="Apple Macbook Air 13/ 512 GB" />
          <Products img={image4} price="149 889 руб." name="Apple MacBook Pro 13 Retina/ 512Gb" />
          <Products img={image5} price="149 889 руб." name="Apple MacBook Pro 16/ 1Tb" />
          <Products img={image6} price="143 191 руб." name="Apple MacBook Pro 13 Retina/ 512Gb" />
        </div>
      </div>
      <Basement />
    </div>
  );
}
export default App;