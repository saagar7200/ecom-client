
import ProductTitle from  './product-title'
import {IProduct} from '@/interface/auth/product.interface'
import {QuantityInput} from '@/components/ui/quantity-input'
interface IProps {
    product:IProduct
}
export const ProductDetails:React.FC<IProps> = ({product}) =>{
    return(
        <div>
            <div>
                <ProductTitle name={product.name} rating={product.averageRating ?? 0}/>
                <p className='text-[20px] tracking-wider mt-5 '>रु. <span className='text-blue-500 font-bold'>{product.price}</span></p>
            </div>
            <div className='mt-10'>
                <p>Quantity input</p>
                <QuantityInput/>
            </div>
            {/* buttons */}
            
            <div className='flex gap-10 px-4  mt-8 w-full '>
                <button className='px-4 py-2 w-1/2 md:max-w-[300px] rounded-md cursor-pointer text-lg font-bold tracking-wider  bg-blue-500 text-white '>Add To Cart</button>
                <button className='px-4 py-2 w-1/2 md:max-w-[300px] cursor-pointer text-lg font-bold tracking-wider text-blue-500 border border-blue-500 rounded-md'>Add To Wishlist</button>
            </div>
            <div className='mt-10 tracking-wider'>
                <h1 className='font-bold text-xl mb-2'>Description</h1>
                <p className='text-md '>{product.description}</p>
            </div>
            
        </div>
    )
}