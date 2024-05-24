"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
 
const Slider = () =>{
    const data = [
        {
          id: 1,
          title: "fresh & always crispy & always hot",
          image: '/slide1.png',
        },
        {
          id: 2,
          title: "we deliver your order wherever you are in NY",
          image:'/slide2.png',
        },
        {
          id: 3,
          title: "the best pizza to share with your family",
          image: '/temporary/m3.png',
        },
      ];
      //to define index of data such as ===> [data[0].title]
      const [ currentInfoSlider, setCurrentInfoSlider ] = useState(0)
      useEffect(()=>{
         const interval= setInterval(()=>{
          setCurrentInfoSlider((prev)=>( prev ===data.length-1 ? 0 : prev+1))
         },4000)
         return ()=>clearInterval(interval)
      },[data.length])
    return(
        <div className="flex flex-col lg:flex-row h-screen  bg-fuchsia-50 " key={data[currentInfoSlider].id}>
            {/* text containter */}
            <div 
              className=" relative flex flex-col justify-center items-center h-1/2 text-red-500 font-bold md:gap-2  lg:w-1/2  w-full my-8 lg:h-full" >
                <h1 className="uppercase p-6 text-center leading-loose md:leading-loose lg:leading-loose xl:leading-relaxed text-4xl  md:text-5xl  xl:text-7xl font-bold ">
                    {data[currentInfoSlider].title}
                </h1>
                <Link href="/menu" >
                   <button className="bg-red-500 text-white px-8 py-4 rounded-xl">Order Now</button>
                </Link>
            </div>
            {/* image container */}
            <div className="relative w-full flex-1 max-md:mt-8 relative h-1/3 lg:w-1/2 lg:h-full">
                <Image src={data[currentInfoSlider].image} alt="slide-image"  width={200} height={200} className="object-cover w-full h-full"  />
            </div>
        </div>
    )
}
export default Slider