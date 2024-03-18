import React from 'react'
import './Cart.scss'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemAction } from '../../Redux/Action'

function Cart() {
    const itemsInCart=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const handleDispatch=(itemid)=>{
        const newCartItems=itemsInCart.filter(e=>e.id!=itemid)
        dispatch(RemoveItemAction(newCartItems))

    }
  return (
    <div className='card-container' >
            <div className='shoppingcard'>
                <p className='addtocardTitle'>Shopping Card</p>
                {itemsInCart.map(item=>{return (<div className='row productDetails' key={item.id}>
                    <img src={item.image} alt="cardimg" className='col-md-4' />
                    <div className='col-md-7'>
                        <p className='title'>{item.name}</p>
                        <p className='metadata'>{item.color} <span>{item.material}</span></p>
                        <p className='price'>INR {item.price}</p>
                        <button onClick={()=>handleDispatch(item.id)}>Remove <IoMdClose /></button>
                    </div>
                </div>)})}
                

            </div>
        </div>
  )
}

export default Cart