"use client"
import Link from 'next/link'
import { pizzas} from '../../../../data'
import Image from 'next/image'
import { useState, useMemo} from 'react'

export default function Catagory ({params}:{params:{catagoryName:string}}) {
    const [catagory,setCatagory]= useState("");
    const [num,setNumb]=useState(0)
    const typeOfCatagory=useMemo(()=>{
         if(params.catagoryName === "pizzas"){
                setCatagory('Pizza')
            }
            else if(params.catagoryName === "burgers"){
                setCatagory('Burger')
            }
            else{
                setCatagory('Pasta')
        
            }
            return catagory

    },[catagory])

    

    return(
        <>
        <h1 className="flex justify-center items-center text-5xl my-8 text-orange-500 text-2xl font-bold">
            {typeOfCatagory} Menu 
        </h1>
           <div className="flex flex-wrap text-red-500">
                {pizzas.map((pizza)=>(
                    <Link  className="group border-r-2  border-b-2 border-red-500  w-full md:w-1/2  lg:w-1/3 flex  flex-col gap-6 h-[50vh] odd:bg-fuchsia-50" href={`/product/${pizza.id}`}>
                        {pizza.img && 
                        (<div className="relative py-10 w-full   h-[80%]">
                            <Image src={pizza.img} alt="catagory-img" className="object-contain pt-2" fill/>
                        </div>)
                        }
                        <div className="flex justify-between items-center mx-0.5 ">
                            <p className="font-bold text-lg uppercase lg:text-sm xl:text-lg max-sm:text-[.8rem]">{pizza.title}</p>
                            <p className="font-bold max-sm:text-[.7rem]">${pizza.price} {num}</p>
                            <button className=" hidden group-hover:block text-sm uppercase bg-red-500 text-white p-2 rounded-lg font-bold">add to cart</button>
                        </div>
                    </Link>
                    ))}
            
           </div>
           </>

        
    )
}