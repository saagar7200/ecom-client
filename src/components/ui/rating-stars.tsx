'use client'

// @ts-expect-error //type error
import { StarRating } from 'react-flexible-star-rating';
import React ,{useEffect}from "react";
 
interface IProp {
    rating:number
}
 
export const RatingStar:React.FC<IProp> = ({rating}) =>{

    useEffect(()=>{
        console.log('render',rating)
    },[rating])


   

    return(
      
        <div className='flex'>
            <StarRating className='cursor-pointer disabled:cursor-none' isReadOnly={true} dimension={8} initialRating={rating} onRatingChange={()=>{}} />
        </div>
           
       
      );
}