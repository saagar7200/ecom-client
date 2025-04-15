'use client'
import React,{useEffect, useState} from 'react'

interface IProp {
    value:number;
    setValue:(x:number)=>void
}


export const QuantityInput:React.FC<IProp> = ({value,setValue}) => {
    const [quantity,setQuantity] = useState(value)

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

    useEffect(()=>{
        setValue(quantity)
    },[quantity,setValue])

    return(
        <div className='flex item-center rounded-md  border border-blue-500 w-fit my-2'>
            <button className='text-2xl font-bold  h-10 w-10  cursor-pointer  aspect-square' onClick={decreaseQTY}>-</button>
            <input className='max-w-[100px] text-center outline-none focus:outline-none ring-none focus:ring-none' value={quantity}/>
            <button className='text-2xl font-bold  h-10 w-10  cursor-pointer  aspect-square' onClick={increaseQTY}>+</button>
        </div>
    )
}