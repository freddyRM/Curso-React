//siempre y cuando la promesa se cumpla esta seguira
//ejecutandose mientras no pues no se ejecuta
// con el catch capturamos los errores
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(e => console.log(e))

const obtenerUsuario = async() => {
    try{
        const repuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await repuesta.json()
        console.log(datos)
    }catch(e){
        console.log(e)
    }
}
obtenerUsuario()