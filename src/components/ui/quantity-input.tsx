'use client'
import React,{useState} from 'react'


export const QuantityInput = () => {
    const [quantity,setQuantity] = useState(1)

    const increaseQTY = () =>{
        setQuantity(prev => prev + 1)
    }

    const decreaseQTY = () =>{
        setQuantity((prev:number) => {
            if(prev > 1){
               return  prev - 1
            }
            return 1
        })
    }

    return(
        <div className='flex item-center'>
            <button onClick={decreaseQTY}>-</button>
            <input value={quantity}/>
            <button onClick={increaseQTY}>+</button>
        </div>
    )
}