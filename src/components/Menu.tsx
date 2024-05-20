"use client"
import Image from 'next/image';
import Link from 'next/link';
import open from '../../public/open.png'
import close from '../../public/close.png'
import { NavbarLinks } from '../../data'
import { CartIcon, PhoneIcon } from './index';
import { useState } from 'react'
const Menu = () =>{
    const [menuOpen,setMenuOpen]=useState(false);
    const openMenu = () =>{
        menuOpen ? setMenuOpen(false):setMenuOpen(true)
    }
    const user= true;
    return(
        <div>
            {
             menuOpen ?
                (<Image src={close} alt="open-menu" width={20} height={20} onClick={openMenu} className="cursor-pointer"/>):
                (<Image src={open} alt="open-menu" width={20} height={20} onClick={openMenu} className="cursor-pointer"/>)
            }
            {menuOpen && 
                <div className="z-20 bg-red-500 text-white absolute  fixed left-0 h-screen top-24 flex flex-col w-full items-center justify-center gap-10 font-bold uppercase text-2xl">
                    {NavbarLinks.map((link)=>(
                        <Link href={link.href} key={link.id} onClick={()=>setMenuOpen(false)}>{link.name}</Link>   
                    ))}

                    {user ? (<Link href="/login">login</Link>):(<Link href="/orders">orders</Link>)}

                    <Link href="/cart">
                       <CartIcon/>
                    </Link>

                    <Link href="/phone">
                       <PhoneIcon/>
                    </Link>
                </div>  
            }   
        </div>
    )
}
export default Menu