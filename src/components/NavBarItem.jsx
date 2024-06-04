"use client"

import Link from 'next/link'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavBarItem({ title, param }) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <div>
                <Link
                    className=
                    {
                        `hover:text-red-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-red-600 rounded-lg' : ''}`
                    }
                    href={`/?genre=${param}`}
                >
                    {title}
                </Link>
            </div>
        </Suspense>
    )
}
