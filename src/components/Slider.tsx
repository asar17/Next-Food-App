"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
 
const Slider = () =>{
    const data = [
        {
          id: 1,
          title: "always fresh & always crispy & always hot",
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
          image: '/slide3.jpg',
        },
      ];
      //to define index of data such as ===> [data[0].title]
      const [ currentInfoSlider, setCurrentInfoSlider ] = useState(0)
      useEffect(()=>{
         const interval= setInterval(()=>{
          setCurrentInfoSlider((prev)=>( prev ===data.length-1 ? 0 : prev+1))
         },4000)
         return ()=>clearInterval(interval)
      },[])
    return(
        <div className="flex flex-col h-screen lg:flex-row  bg-fuchsia-50 ">
            {/* text containter */}
            <div className=" max-sm:h-full flex flex-col justify-center items-center  text-red-500 font-bold gap-8 flex-1 lg:h-screen h-1/2 w-full">
                <h1 className="uppercase p-6 text-center leading-normal md:p-10 text-5xl md:text-6xl  xl:text-7xl font-bold">
                    {data[currentInfoSlider].title}
                </h1>
                <button className="bg-red-500 text-white px-8 py-4 rounded-xl">Order Now</button>
            </div>
            {/* image container */}
            <div className=" w-full flex-1 max-md:mt-8 relative h-screen max-lg:hidden">
                <Image src={data[currentInfoSlider].image} alt="slide-image"  width={200} height={200} className="object-cover w-full h-full"  />
            </div>
        </div>
    )
}
export default Slider