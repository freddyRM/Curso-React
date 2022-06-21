import React, {useState, useEffect } from 'react'

const Bienvenida = (props) => {
  console.log(props)
  //con esto le estariamos indicando que solo queremos el nombre del props
  const {nombre} = props 
  const [ABC, setABC]= useState('Pedro')
  useEffect ( ()=>{
    setTimeout( ()=>{
      setABC('Freddy')
    },2000 )
  })
  return (
    <div>
        {/* <h2>Bienvenido {props.nombre}</h2> */}
        <h2>Bienvenido {nombre}</h2>
        {ABC}
    </div>
  )
}

export default Bienvenida