import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    // console.log(props.data);
    const {name,img,seller,price,ratings}=props.data;
    const addToCartHandeler=props.addToCartHandeler;
    
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl" style={{'height': '500px'}}>
        <figure>
          <img
          className="w-fit"
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : ${price}</p>
          <br /><br />
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>addToCartHandeler(props)} className="btn btn-primary">
            <FontAwesomeIcon icon={faCartPlus} />
              Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
