'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
interface IProps {
    images:string[]
}

const ImageSlider:React.FC<IProps> = ({images}) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
      };
    return(
        <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((image,index) => {
            return(
                <div key={index}>
                    <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt={'product detail image'}

                    />
                </div>
            )
        })}
      </Slider>
    </div>
    )
}

export default ImageSlider