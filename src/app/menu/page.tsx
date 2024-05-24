import { menu } from '../../../data'
import Link from 'next/link'
export default function MenuPage () {
    return (
        <div className=" p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] sm:h-screen
        flex flex-col md:flex-row items-center">
            {menu.map((item)=>{
                
                return(
                    <Link href={`menu/${item.slug}`}
                        className={`flex-1 flex flex-col relative h-1/3 md:h-1/2  w-full p-2 bg-cover  md:p-6 lg:p-10 text-${item.color}`}
                        key={item.id}
                        style={{backgroundImage:`url(${item.img})`}}
                    >
                        <div className="flex flex-col relative  max-sm:w-full md:w-full">
                            <h1 className="uppercase text-3xl font-bold  ">{item.title}</h1>
                            <p className="font- opacity-70 text-sm my-8  ">{item.desc}</p>
                        
                        </div>
                    </Link>
                )
             })}

        </div>
    )
}