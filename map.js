//el map sirve para mapear objetos de uso constantes
// map es mas rapido en la recorreccion de objetos
//que el foreach
const datos = [
    {nombre:'Freddy', edad:31},
    {nombre:'Victoria', edad:20},
    {nombre:'Francisca', edad:60},
    {nombre:'Juan', edad:45}
]

// datos.forEach( elemento => {
//     //console.log(elemento)
//     console.log(elemento.nombre)
// })

datos.map( elemento => {
    //console.log(elemento)
    console.log(elemento.nombre)
})