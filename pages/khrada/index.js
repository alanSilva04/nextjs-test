import React from 'react'
import styles from "../../styles/khrada.module.css"
import Head from 'next/head'
import Link from 'next/link'

function Khrada({ pupils }) {
  const pupilsData = pupils.map(pupil => (
    <Link href={`/khrada/${pupil.id}`} key={pupil.id}>
      <a className={styles.single}>
        <h3>{pupil.name}</h3>
      </a>
    </Link>
  ))

  return (
    <>
      <Head>
        <title>Khrada List | List</title>
        <meta name="keywords" content="khrada" />
      </Head>
      <div>
          <h1>Followers of Khrada</h1>
          {pupilsData}
      </div>
    </>
  )
}

export default Khrada

export const getStaticProps = async() => {

  const rest = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await rest.json();

  return {
    props: { pupils: data }
  }
}