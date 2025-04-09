'use client'
import { getProductById } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from './image-slider'
interface IProp {
    id:string
}

const product = {
    name:'Laptop',
    category:{
        name:'Electronics'
    },
    _id:'3',
    coverImage: '/product/product.webp',
    images:['/product/product.webp','/product/product.webp','/product/product.webp',],
    price:'1000',
    averageRating: 3.5,
    description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, expedita? Amet rem itaque
        facilis reprehenderit suscipit culpa cupiditate placeat facere, natus, nemo sequi fugiat alias
        modi dolorem. Natus, nisi culpa!`,

}

const ProductDetail:React.FC<IProp> = ({id}) => {
    const {isLoading,data,isError,error} = useQuery({
        queryKey:['get-product-by-id',id],
        queryFn:() => getProductById(id)
    })
    


    console.log(isLoading,data)

    useEffect(()=>{
        if(isError){
            toast.error(error?.message ??'something went wrong')
        }
    },[error,isError])
  return (
    <div className='px-10 flex  gap 10 w-full'>
        {/* left side */}
        {/* image section */}
        <div className=''>
            Image carousel
            <div className='w-[600px] h-[600px]'>
            <ImageSlider images={product.images}/>
            </div>
        </div>
        {/* right side */}
        {/* product detail */}
        <div className='flex-1'>
            detail
        </div>
    </div>
  )
}

export default ProductDetail