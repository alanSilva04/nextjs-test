import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from "react"
import { useRouter } from "next/router"

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push("/");
        }, 3000)
    }, [])

  return (
    <>
        <Head>
            <title>Khrada List | 404 Not Found</title>
            <meta name="keywords" content="khrada" />
        </Head>
        <div className='not-found'>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    </>
  )
}

export default NotFound