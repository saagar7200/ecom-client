import React from 'react'
import ProductList from '../products-list'

const products = [
    {
        id:'1',
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        id:'2',
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        id:'3',
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        id:'4',
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        id:'5',
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    }
]

const SummerSale = () => {
    return (
        <div className='mt-10'>
            <ProductList isLoading={false} title='Summer Sale' products={products} />
        </div>
    )
}

export default SummerSale