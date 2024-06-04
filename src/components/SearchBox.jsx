"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search/${search}`)
    }
    return (
        <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search keyword..." className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1" />
            <button className=" font-bold disabled:text-gray-400 disabled:bg-transparent  pl-3 pr-3 mt-2 h-10 rounded-md bg-red-600 text-white" disabled={search === ''}>Search</button>
        </form>
    ) 
}
