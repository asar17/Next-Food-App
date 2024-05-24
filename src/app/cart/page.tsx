"use client"
import Image from 'next/image'
import { Products,Product,carts } from '../../../data'
import { useEffect ,useState,useCallback ,useMemo} from 'react';

export default function Cart (){

    const [details,setDetails]=useState([]);
    const [count,setCount]=useState(0);
    const [calcSum,setCalcSum]=useState(0);
    const [total,setTotal]=useState(0);
    const [clicked,setClicked]=useState(0);

  
       //calc sum
       useEffect(()=>{
         sum()
       },[calcSum])

     
  
        //remove item from carts depend on specific index
        const removeItem =useCallback((index:number)=>{
            details.splice(index,1);
            localStorage.setItem('inCart',JSON.stringify(details));
            setTotal(0)
            details.map((d) => setTotal((total) => total + d['totalPrise']));

        },[details,total,count])
       
        //calc sum
        const sum=useCallback(async(zero?:string)=>{
                details.map((d) => setTotal((total) => total + d['totalPrise']));
        },[calcSum])


        const getCarts = async ()=>{
            const cart =  localStorage.getItem('inCart');
            const cartDetail=cart !== null ? JSON.parse(cart):[];
            await setDetails(cartDetail);
        }

          //to get carts from local-storage
          useEffect(()=>{
            getCarts()
          },[count])

    
    return(
        <div className="flex flex-col lg:flex-row lg:w-full h-screen   ">
            {/* cart container */}
            <div className="flex  h-1/2 w-full px-4  py-2 md:ml-0 lg:w-1/2  md:px-10 lg:h-screen  lg:justify-start lg:items-start lg:p-16">
                    {details?.length !== 0 ?(
                        <div className="flex flex-col w-full lg:h-full md:h-full  overflow-y-scroll justify-center   lg:py-20 ">
                        
                        {details?.map((item:Product,index)=>{
                            
                        return(
                                <div className=" flex gap-4 md:py-1  h-1/3  items-center" key={index}>
                                    {/* image container */}
                                    <div className="w-[35%] md:w-[25%] lg:w-[35%] h-[15vh] flex justify-center ">
                                        {item.img &&<Image src={item.img} alt="cart-img" className="object-contain py-1 flex" width={100} height={100}/>}
                                    </div>
                                    {/* text container */}
                                    <div className="w-full  flex text-red-500  items-center justify-between">
                                        <div className="flex flex-col  w-[40%]  lg:w-[50%]">
                                            <h1 className="text-[.9rem] text-left w-full uppercase font-bold">{item.title}</h1>
                                            {item?.options?.map((i:{title:string,additionalPrice:number})=>{
                                                const total=item?.totalPrise;
                                                const prise=item.price;
                                                const addPrice=i?.additionalPrice;
                                                const count=total && total/(prise+addPrice)

                                                return(
                                            <p className="text-[.8rem] font-light text-orange-500 " key={i.title}>{count && count.toFixed(0)} {i.title}</p>

                                            )})}
                                            
                                        </div>
                                        <p className="-mt-4">${item?.totalPrise?.toFixed(2)}</p>
                                        <Image src="/close.png" alt="close-img" width={10} height={10} className="cursor-pointer -mt-4" onClick={()=>{removeItem(index); setClicked(index); setCount((prev)=>prev-1);}}/>
                                    </div>
                                </div>
                        )})}
            
                </div>
               ):(<div className="uppercase text-orange-500 text-3xl md:text-4xl w-full h-[90%] flex justify-center items-center ">No Items In Cart</div>)}
            </div>
            {/* cart price */}
            <div className="lg:w-1/2 lg:h-screen md:px-12 lg:px-24 flex flex-col  justify-center  h-1/2  bg-fuchsia-50 px-3 gap-6 text-red-500 font-normal text-sm">
               <div className="flex justify-between">
                 <p>Subtotal ({details?.length} items)</p>
                 <span>{calcSum ===0 || details.length === 0 ? ('00,00'):(total.toFixed(2))}</span>
               </div>
               <div className="flex justify-between">
                 <p>Service Cost</p>
                 <span>$0.00</span>
               </div>
               <div className="flex justify-between">
                 <p>Delivery Cost</p>
                 <span className="text-green-500">FREE!</span>
               </div>
               <div className="flex justify-between mt-8">
                 <p>TOTAL(INCL VAT)</p>
                 <span className="font-bold text-md">{calcSum ===0 || details.length ===0 ? ('00,00'):(total.toFixed(2))}</span>
               </div>
               <div className="flex justify-end">
                <div className="bg-red-500 text-white p-3 px-20 w-1/2 rounded-md flex justify-center ">
                    <button className="uppercase " onClick={()=>setCalcSum((prev)=>prev+1)}>CHECK</button>
                </div>
               </div>
            </div>
        </div>
    )
}