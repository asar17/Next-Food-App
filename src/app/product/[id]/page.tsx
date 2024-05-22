"use client"
import Image from 'next/image'
import { useState, useEffect, useMemo,useCallback} from 'react'
import Link from 'next/link'
import { pizzas ,Product }  from '../../../../data'

 export default function Product1 ({params}:{params:{id:string}}){
    

    const [clicked,setClicked]=useState(0)
    const convertId=parseInt(params.id)
    
        
        const specificindex = pizzas.findIndex((pizza)=>(pizza.id === convertId))
        const res=pizzas[specificindex];
        
   
    
    const [count,setCount]= useState(0)
    const [totalPrice,setTotalPrice]=useState(res.price)
    const [totalPriceWithCount,setTotalPriceWithCount]=useState(0);
    const [carts,setCarts]=useState([]);

    // const copyPizzas=JSON.parse(JSON.stringify(pizzas));
    // console.log('card',carts);
    // console.log('res',res)
    // console.log('copy',copyPizzas)

    const  addToCart = useCallback((id: number,) => {
        const copyPizzas=JSON.parse(JSON.stringify(pizzas));
        const index= copyPizzas.findIndex((f:Product)=>f.id===id);
        const res2= copyPizzas[index];
      

        res2.inCart=true;
        res2.totalPrise=totalPriceWithCount;
        res2.options=[res2?.options[clicked]];
        
         console.log('res',res2)
        carts.push(res2)
        console.log('card',carts)
      
        localStorage.setItem('card',JSON.stringify(carts))

   },[totalPriceWithCount,carts])

   useEffect(()=>{

    const cart:any=localStorage.getItem('card');
    const cartDetail=JSON.parse(cart);
    setCarts(cartDetail)
    
   },[])
 
    //to set total pricedepend on [small,medium,large]
    useEffect( ()=>{
          setTotalPrice(res.options?res.price+res?.options[clicked]?.additionalPrice:res.price)
    },[clicked,totalPrice,res])

   //to set total price depend on [small,medium,large] with quanity
    useEffect( ()=>{
        
        setTotalPriceWithCount(totalPrice*(count))
        
  },[totalPrice,count])


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
                    {res.options && res?.options?.map((btn,index)=>(
                        <button 
                           className={`border-red-500 border-2  px-4 py-1 rounded-lg font-light ${clicked ===index &&'bg-red-500 text-white'}`}
                           onClick={(e)=>{setClicked(index);  }}
                        >{btn?.title}</button>
                    ))}
                    
                </div>
                <p className="font-bold text-xl"><span className="text-orange-500 text-2xl">TotalPrice:</span>${totalPriceWithCount.toFixed(2)}</p>

                <div className="flex ">
                    <div className="flex justify-between flex-1 border-2 border-red-500 p-2">
                        <p>Quantity</p>
                        <p className="cursor-pointer">
                            <span onClick={()=>{setCount((prev)=>(prev ===0?0:prev-1));}}>- </span>
                              {count}
                            <span onClick={()=>{setCount((prev)=>(prev<10?prev+1:10)); }}> +</span>
                        </p>
                    </div>
                    <Link href="/cart" className="bg-red-500 text-white p-2 text-md">
                       <button className="uppercase" onClick={()=>{addToCart(res.id); }}>add to cart</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
