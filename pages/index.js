import React from "react"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Khrada List | Home</title>
        <meta name="keywords" content="khrada" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis fuga, architecto amet dolorem voluptatum quam itaque minima dolore natus, nulla quisquam tenetur ut, veritatis maiores quidem illo ipsa quibusdam?</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis fuga, architecto amet dolorem voluptatum quam itaque minima dolore natus, nulla quisquam tenetur ut, veritatis maiores quidem illo ipsa quibusdam?</p>
        <Link href="/khrada">
          <a  className={styles.btn}>See Khrada Listing</a>
        </Link>
      </div>
    </>
  )
}
