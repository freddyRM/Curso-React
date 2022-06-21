import React,{Fragment,useState} from 'react'

const Listado = () => {

  const [numeros,SetNumeros] = useState([1,2,3,4,5,6])

  return (
    <Fragment>
        <ul>
            {
                numeros.map ((item, index) =>
                    /* hay que tener cuidado y colocar la key unica */
                    <li key={index}>
                        {item} = {index}
                    </li>
                )
            }
        </ul>
    </Fragment>
  )
}

export default Listado