import React, {Fragment} from 'react'

function Hola() {
    // se puede integrar js bajo {}
    let saludo = 'Variable saludo'
    return(
        // cuando contienes mas de un elemento si
        // un contenedor este mostrara un error
        <Fragment>
            <h2>Primer componente Hola. {saludo}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti voluptas rerum, placeat error repellendus modi cupiditate consequuntur ipsum quaerat inventore at quia blanditiis a iure sapiente hic voluptatem enim?</p>
        </Fragment>
    )
}

export default Hola