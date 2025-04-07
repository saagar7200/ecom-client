'use client'
import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/interface/auth/product.interface'

interface IProp {
    product:IProduct
}

const ProductCard:React.FC<IProp> = ({product}) => {
    console.log('product list',product)
    
    const {coverImage,price,name} = product;
    return (
        <div className='overflow-hidden tracking-wider border border-gray-300 w-fit rounded-md '>
            {/* image */}
            <div className='h-50 w-60 aspect-square p-3'>
                <Image
                    className='h-full w-full transition-all duration-300 hover:scale-[1.1]'
                    height={1000}
                    width={1000}
                    src={coverImage ?? '/product/product.webp'}
                    alt='product image' />
            </div>
            <div className='p-3'>
                <p className='text-[15px]'>
                    {name}
                </p>
                <span className='text-[15px]'>
                रु.{price}
                </span>
            </div>
            <div >
                <button className='cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold'>View Detail</button>
            </div>
        </div>
    )
}

export default ProductCard