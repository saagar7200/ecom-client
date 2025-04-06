import React from 'react'
import ProductList from '../products-list'

const products = [
    {
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    },
    {
        coverImage: '/product/product.webp',
        name: 'Tending products',
        price: 230
    }
]

const TendingProducts = () => {
    return (
        <div>
            <ProductList title='Trending Products' products={products} />
        </div>
    )
}

export default TendingProducts