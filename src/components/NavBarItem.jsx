"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function NavBarItem({ title, param }) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    return (
        <Suspense>
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
