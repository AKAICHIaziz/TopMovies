"use client"

import { useEffect, Suspense } from "react"

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
            <div className="text-center mt-10">
                <h1>Something went wrong, please try again.</h1>
                <button className="hover:text-amber-800" onClick={() => reset()}>Go back</button>
            </div>
    )
}
