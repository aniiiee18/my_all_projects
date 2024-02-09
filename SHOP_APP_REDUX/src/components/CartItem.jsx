import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast'
import {add, remove} from '../redux/Slices/CartSlice'


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
      dispatch(remove(item.id));
      toast.success("Item removed")
  }
        console.log(item.title)
  return (
    <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <MdDeleteForever />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
