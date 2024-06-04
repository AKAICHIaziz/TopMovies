"use client"

import { Suspense, useEffect } from "react"

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="text-center mt-10">
            <h1>Something went wrong, please try again.</h1>
            <button className="hover:text-amber-800" onClick={() => reset()}>Go back</button>
        </div>
        </Suspense>
        
    )
}
