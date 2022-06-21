import React,{useState} from 'react'
import {auth} from '../firebaseconfig'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const historial = useNavigate()  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgerror, setMsgError] = useState(null)

  const registrarUsuario = (e)=>{
    e.preventDefault()
    // try{
    //   auth.createUserWithEmailAndPassword(email,pass)
    //   .then( r => alert('Usuario registrado'))

    // }catch (e){
    //   // este trabajo se realiza para encontrar los avisos
    //   // una vez encontrado colocarlos como validadores
    //   // auth/invalid-email
    //   // auth/weak-password
    //   // console.log(e.code)
    //   //console.log(e)
    //   if(e.code == 'auth/invalid-email'){
    //     setMsgError('Formato Email incorrecto')
    //   }
    //   if(e.code == 'auth/weak-password'){
    //     setMsgError('La contraseña debe tener 6 caracteres o mas')
    //   }
    // }

      auth.createUserWithEmailAndPassword(email,pass)
      .then( //r => alert('Usuario registrado')
        r => {historial('/')}
      )
      .catch( e => {
        if(e.code === 'auth/invalid-email'){
          setMsgError('Formato Email incorrecto')
        }
        if(e.code === 'auth/weak-password'){
          setMsgError('La contraseña debe tener 6 caracteres o mas')
        }
      })
  }

  const loginUsuario = ()=>{
    auth.signInWithEmailAndPassword(email,pass)
    .then( //(r) => console.log(r)
      r => {historial('/')}
    )
    .catch((err)=>{
      // auth/wrong-password
      // auth/user-not-found
      // "signIn"
      // console.log(err)
      if(err.code === 'auth/wrong-password'){
        setMsgError('Error contraseña incorrecta')
      }
      if(err.code === 'auth/user-not-found'){
        setMsgError('Error Email incorrecto')
      }
    })
  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={registrarUsuario} className="form-group">
          <input 
            onChange={(e)=>{setEmail(e.target.value)}}
            className="form-control"
            placeholder='Introduce el Email'
            type='text'/>
          <input 
            onChange={(e)=>{setPass(e.target.value)}}
            className="form-control mt-4"
            placeholder='Introduce la Contraseña'
            type='password'/>
          <input className="btn btn-dark btn-block mt-4"
            value='Registrar Usuario'
            type="submit"/>
        </form>
        <button 
          onClick={loginUsuario}
          className="btn btn-success btn-block mt-4"
        >
          Iniciar sesion
        </button>
        {
          msgerror !== null ?
          (
            <div clasName="alert alert-danger">{msgerror}</div>
          )
          :
          (
            <span></span>
          )
        }
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login