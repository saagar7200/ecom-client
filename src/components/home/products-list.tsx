/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ProductCard from '../product/product-card';
interface IProp {
    title: string;
    products: any[]

}

const ProductList: React.FC<IProp> = ({ title = 'Most Sale', products }) => {
    return (
        <div className='w-full px-4'>
            <div className='w-full py-2'>
                <h1 className='font-bold text-2xl tracking-wider' >{title}</h1>
            </div>
            {/* products */}
            <div className='flex gap-4 my-2 flex-wrap'>
                {
                    products.map((product, index) => <ProductCard key={index} />)
                }

            </div>

        </div>
    )
}

export default ProductList