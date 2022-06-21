const Persona = {
    nombre: 'Manuel',
    edad: 37,
    casado: false,
    hijo:{
        nombrehijo:'Alma'
    }
}
//hay casos muy puntuales en que
//se requiera una funcionabilidad
//y se le asigna un elemento mas al objeto
Persona.id=1
console.log(Persona.id)
console.log(Persona)
console.log(Persona.nombre)
console.log(Persona.casado)
console.log(Persona.hijo.nombrehijo)