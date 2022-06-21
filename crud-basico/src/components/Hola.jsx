import React from 'react'
import {useParams} from 'react-router-dom'

const Hola = () => {

  const {nombre} = useParams()
  console.log({nombre})
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>Estas en inicio</h2>
        <h3> hola </h3>
        {nombre}
    </main>
  )
}

export default Hola