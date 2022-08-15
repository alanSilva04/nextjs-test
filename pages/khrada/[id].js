import React from 'react'

function Details({ pupil }) {
  return (
    <div>
        <h1>{pupil.name}</h1>
        <p>{pupil.email}</p>
        <p>{pupil.website}</p>
        <p>{pupil.address.city}</p>
    </div>
  )
}

export default Details

export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(pupil => {
        return {
            params: { id: pupil.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false    
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { pupil: data }
    }
}