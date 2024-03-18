import React from 'react'
import "./Cards.scss";
import { AddItemAction } from '../../Redux/Action';
import { useDispatch } from 'react-redux';

function Cards({ item }) {
    const dispatch = useDispatch()
    const handleDispatch = (item) => {
        dispatch(AddItemAction(item))
    }
    return (
    
<div className='cardsection ' onClick={()=>handleDispatch(item)}>
            <div className='imgsection'>
                <img src={item.image}/>
                <div className="overlay">
                    <div className="addtocart">Add to Cart</div>
                </div>
            </div>
            <div className='detailsection'>
                <p className='title'>
                    {item.name}

                </p>
                <p className='metadata'>
                  {item.color} {' '}
                    <span>
                     {item.material}
                    </span>
                   
                </p>
                <p className='price'>
                    INR {item.price}
                </p>
            </div>

        </div>
      
        
    )
}

export default Cards