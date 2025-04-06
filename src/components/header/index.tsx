import Link from 'next/link'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
const Header = () => {
    return (
        <div className='tracking-wider flex shadow justify-between items-center py-6 px-10'>
            {/* logo */}
            <div>
                <p className='font-bold text-xl text-blue-500'>LOGO</p>
            </div>
            {/* center section  */}
            <div className='flex gap-5 text-lg'>
                <div>
                    <Link href={'/'}>
                        <p className=' transition-all duration-300 hover:text-blue-600 font-semibold'>Home</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/contact-us'}>
                        <p className=' transition-all duration-300 hover:text-blue-600 font-semibold'>Contact Us</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/about-us'}>
                        <p className=' transition-all duration-300 hover:text-blue-600 font-semibold'>About Us</p>
                    </Link>
                </div>

            </div>
            {/* right section */}
            <div className='flex gap-4'>
                <div>
                    <Link href='/wishlist'>
                        <CiHeart className='text-gray-600 text-bold transition-all duration-300 hover:scale-[1.1]' size={28} />
                    </Link>
                </div>
                <div>
                    <Link href='/cart'>
                        <BsCart3 className='text-gray-600 text-bold transition-all duration-300 hover:scale-[1.1]' size={24} />
                    </Link>
                </div>
                <div>
                    <Link href='/login'>
                        <IoPersonOutline className='text-gray-600 text-bold transition-all duration-300 hover:scale-[1.1]' size={24} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header