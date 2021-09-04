import React from 'react';

function Products(props) {
  return (
    <div className="card">
      <div className="item-img">
        <img src={props.img} alt="" />
      </div>
      <div className="item-price">
        <h5>{props.price}</h5>
      </div>
      <div className="item-name">
        <p>{props.name}</p>
      </div>
      <div>
        <button className="btn btn-primary w-100">Купить</button>
      </div>
    </div>
  );
}

export default Products;