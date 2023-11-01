/* eslint-disable no-unused-vars */
import React from 'react';
import { deleteShoppingCart } from '../Utilities/fakedb';

const CardCalculate = ({cart,deleteCart,children}) => {
    
    console.log(children)
    let totalPrice=0 ,totalShippingCost=0,quantity=0;
    for(let product of cart){
        
        totalShippingCost=totalShippingCost+product.shipping;
        quantity=quantity+product.quantity;
        totalPrice = totalPrice+((product.price)*product.quantity);
    }
    const tax=((totalPrice*7)/100);
    // console.log(cart);
    
    return (
        <div className="sticky top-20 text-left bg-slate-300 p-5 rounded-md">
            <h1 className="text-center mb-5 text-2xl font-bold">Order Summary</h1>
            <h2>Selected Items : {quantity}</h2>
            <h2>Total Price: {totalPrice} </h2>
            <h2>Total Shipping Charge : {totalShippingCost} </h2>
            <h2>Tax : {tax.toFixed(2)}</h2>
            <h2 className="text-center mb-5 text-2xl font-bold mt-4">Grand Total : {(totalPrice + totalShippingCost +tax).toFixed(2)}</h2>

            {children}
{/* 
            <button className='btn btn-error  mb-3 w-full' onClick={deleteCart}>Clear Cart</button>
           ({children}==='order')&&(<button className='btn  btn-success w-full' >Proceed to checkout</button>
            {{children}=='shop'})&&<button className='btn  btn-success w-full' >Review Order</button> */}
        </div>
    );
};

export default CardCalculate;