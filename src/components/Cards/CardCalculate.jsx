import React from 'react';

const CardCalculate = (props) => {
    const cart =props.cart;
    let totalPrice=0 ,totalShippingCost=0;
    for(let prices of cart){
        totalPrice = totalPrice+prices.price;
        totalShippingCost=totalShippingCost+prices.shipping;
    }
    const tax=((totalPrice*7)/100);
    console.log(totalPrice);
    
    return (
        <div className="text-left bg-slate-300 p-5 rounded-md">
            <h1 className="text-center mb-5 text-2xl font-bold">Order Summary</h1>
            <h2>Selected Items : {cart.length}</h2>
            <h2>Total Price: {totalPrice} </h2>
            <h2>Total Shipping Charge : {totalShippingCost} </h2>
            <h2>Tax : {tax.toFixed(2)}</h2>
            <h2 className="text-center mb-5 text-2xl font-bold mt-4">Grand Total : {(totalPrice + totalShippingCost +tax).toFixed(2)}</h2>
        </div>
    );
};

export default CardCalculate;