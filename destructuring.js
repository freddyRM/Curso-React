const Persona = {
    nombre: 'Manuel',
    edad: 37,
    casado: false,
    hijo:{
        nombrehijo:'Alma'
    }
}

const {nombre, edad} = Persona


console.log(nombre)
console.log(edad)

//en caso que se quiera acceder
// a hijo es igual solo que se de
//debe respetar la propiedad

const {nombrehijo} = Persona.hijo
console.log(nombrehijo)