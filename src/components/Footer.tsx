import Link from 'next/link'
const Footer = () => {
    return(
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex justify-between items-center uppercase">
            <Link href="/" className="font-bold text-xl">
                Massimo
            </Link>
            <p className="max-md:text-[.7em]">all right reserved.</p>
        </div>
    )
}
export default Footer