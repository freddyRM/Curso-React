//siempre y cuando la promesa se cumpla esta seguira
//ejecutandose mientras no pues no se ejecuta
// con el catch capturamos los errores
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
.catch(e => console.log(e))