"use client"
import { pizzas } from '../../../../data'
import Image from 'next/image'
import { useState } from 'react'
import style from 'styled-jsx/style'
export default function Product ({params}:{params:{id:string}}){
    const [clicked,setClicked]=useState(0)
    const convertId=parseInt(params.id)
    const specificindex = pizzas.findIndex((pizza)=>(pizza.id === convertId))
    const res=pizzas[specificindex];
    const [count,setCount]= useState(0)
    const [totalPrice,setTotalPrice]=useState(res.price)
    const [totalPriceWithCount,setTotalPriceWithCount]=useState(0)
    const totalPrice2= (add:number) =>{
          return  setTotalPrice(res.price+add)
    
            
    }
    const totalPriceWithCount2 = () =>{
        // if(totalPriceWithCount === 0)
        //     {
        //    return setTotalPriceWithCount(totalPrice)
        //     }
        //     else{
                setTotalPriceWithCount(totalPrice*(count))
            // }
    }
    
    return(
        <div  className="h-screen border-b-2 border-red-500 flex flex-col md:flex-row justify-center items-center lg:p-20 xl:p-40">
            {/* image container */}
            <div className="w-full h-[54%] md:h-[70vh]  relative">
                {res.img && (<Image src={res.img} alt="product-img" fill className="object-contain p-3"/>)}
            </div>
            {/* text container */}
            <div className=" text-red-500 h-full md:h-[70vh] px-2 flex flex-col gap-4 justify-center md:gap-8">
                <h1 className="text-3xl  uppercase font-bold">{res.title}</h1>
                <p className="">{res.desc}</p>
                <p className="font-bold text-xl"><span className="text-orange-500 text-2xl">Price:</span>${totalPrice}</p>
                <div className="flex gap-2">
                    {res.options?.map((btn,index)=>(
                        <button 
                           className={`border-red-500 border-2  px-4 py-1 rounded-lg font-light ${clicked ===index &&'bg-red-500 text-white'}`}
                           onClick={()=>{setClicked(index); totalPrice2(btn.additionalPrice); }}
                        >{btn.title}</button>
                    ))}
                    
                </div>
                <p className="font-bold text-xl"><span className="text-orange-500 text-2xl">TotalPrice:</span>${totalPriceWithCount.toFixed(2)}</p>

                <div className="flex ">
                    <div className="flex justify-between flex-1 border-2 border-red-500 p-2">
                        <p>Quantity</p>
                        <p className="cursor-pointer">
                            <span onClick={()=>{setCount((prev)=>(prev ===1?1:prev-1)); totalPriceWithCount2();}}>- </span>
                              {count}
                            <span onClick={()=>{setCount((prev)=>(prev<10?prev+1:10)); totalPriceWithCount2();}}> +</span>
                        </p>
                    </div>
                    <button className="uppercase bg-red-500 text-white p-2 text-md">add to cart</button>
                </div>

            </div>
        </div>
    )
}