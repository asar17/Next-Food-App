export default function MenuLayot (
    {children,pizza,pasta,burger}:
    {
        children:React.ReactNode,
        pizza:React.ReactNode,
        pasta:React.ReactNode,
        burger:React.ReactNode,

    }) {
    return(
        <>
            {children}
        </>
    )
}