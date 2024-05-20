import Image from 'next/image'
import { featuredProducts }  from '../../data'
const Featured= () =>{
    return(
        <div className="w-screen  overflow-x-scroll border-4 border-yellow-500">
           {/* wrapper div */}
           <div className="flex w-max border-4 border-blue-500 h-screen" >
          
                {featuredProducts.map((product)=>(
                    <div key={product.id} className="border-4 border-green-500  flex flex-col p-6 text-red-500 md:items-center justify-around  w-screen  hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]  ">
                            {/* image container */}
                            <div className="flex flex-1 justify-center items-center  w-full relative hover:rotate-[90deg] transition-all duration-500 ">
                                <Image src={product?.img} alt="product-img" className="object-cover" width={250} height={250} />
                            </div>
                            {/* text container */}
                            <div className="flex flex-1 flex-col relative items-center justify-center gap-4 ">
                                <h1 className="uppercase font-bold text-xl xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                                <p className="text-center ">{product?.desc}</p>
                                <span className="font-bold text-xl">{product.price}</span>
                                <button className="bg-red-500 text-white p-3 rounded-md">Add To Cart</button>
                            </div>
                    </div>

                ))}
                  
           </div>
           
        </div>
    )
}
export default Featured
