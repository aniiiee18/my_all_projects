import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const{cart} = useSelector((state)=>state);
  const[TotalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])

  return (
    <div>
      {
        cart.length>0?
        (<div> 
          <div>
            {
              cart.map((item, index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>

          <div>

            <div>              
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amounts : {TotalAmount}</p>
              <button> CheckOut</button>
            </div>

          </div>

        </div>):
        (
          <div>
            <h1>Cart is empty</h1>
            <NavLink to='/' >
                <button>
                  Shop Now
                </button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart