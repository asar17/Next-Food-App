
import Image from 'next/image'
import CountDown from './CountDown'
const Offer = () =>{
    return(
        <div className="flex flex-col  md:flex-row md:justify-between   gap-4  text-black bg-[url('/offerBg.png')] md:h-[100vh] lg:h-[80vh] items-center">
            {/* text container */}
            <div className="flex flex-col  md:w-[50%] lg:w-1/2  p-10 px-20 gap-10  text-center lg:text-left">
                <h1 className="max-md:text-4xl text-5xl  font-bold  text-white">Delicious Burger <br/> & French Fry</h1>
                <p className="font-semibold md:text-xl text-gray-300">
                    Progressively simplify effective e-tiolers and process-<br/>
                    centric methods of empowerment.Quickly pontificate<br/>
                    parallel
                </p>
                <span className="text-yellow-300 text-5xl max-lg:text-xl"><CountDown/></span>
                <div>
                   <button className="bg-red-500 px-6 py-3 rounded-lg">Order Now</button>
                </div>
            </div>
            {/* image container */}
            <div className="flex  flex-1  relative  md:w-[65%] md:h-1/2 lg:w-1/2 lg:justify-end ">
                <Image src="/offerProduct.png"  width={400} height={400} className="object-contain" alt="offer-img"/>
            </div>
           
        </div>
    )
}
export default Offer