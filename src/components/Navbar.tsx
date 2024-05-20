import Menu from './Menu'
import Link from 'next/link'
import {NavbarLinks} from '../../data'
import { CartIcon, PhoneIcon } from './index';

const Navbar = () => {
    const user=true;
    return(
        <div className="flex justify-between items-center gap-2 uppercase text-red-500 lg:px-20 xl:px-40 border-2 border-b-red-500">
            {/* right navbar links */}
            <div className="hidden md:flex justify-center items-center gap-4 flex-1">
                {NavbarLinks.map((link)=>(
                    <Link href={link.href} className="last:hidden">{link.name}</Link>
                ))}
            </div>
            {/* logo */}
            <div className="font-bold text-xl flex flex-1 md:justify-center">
                <Link href="/">massimo</Link>
            </div>
            {/* menu */}
            <div className="md:hidden">
                <Menu/>
            </div>
            {/* left navbar links */}
            <div className="hidden md:flex gap-4 justify-end items-center flex-1 py-2">
               <PhoneIcon/>
               {user ? (<Link href="/login">login</Link>):(<Link href="/orders">orders</Link>)}
               <CartIcon/>
            </div>
        </div>
    )
}
export default Navbar