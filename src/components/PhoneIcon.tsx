import Link from 'next/link'
import Image from 'next/image'
import phone from '../../public/phone.png'
const PhoneIcon = () => {
    return(
        <div className="md:absolute lg:absolute top-3 r-2 lg:static bg-orange-400 flex  justify-center items-center gap-2 rounded-lg px-1 cursor-pointer ">
           <Image src={phone} alt="phone-icon" width={20} height={20} />
           <span>555 44 00 </span>
        </div>
    )
}
export default PhoneIcon