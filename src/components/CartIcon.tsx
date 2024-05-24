import Link from 'next/link';
import cart from '../../public/cart.png'
import Image from 'next/image'

const CartIcon = () =>{
  
    return(
        <Link href="/cart" className="flex gap-4 justify-center items-center">
            <div className="relative w-8 h-8 md:w-5 md:h-5">
               <Image src={cart} alt="cart-icon" width={30} height={30}/>
            </div>
            <span>cart</span>
            <span>()</span>
        </Link>
    )
}
export default CartIcon