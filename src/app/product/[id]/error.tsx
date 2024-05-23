"use client"
export default function ProductError (error:Error){
    return(
        <>
        {error.message}
        </>
    )

}