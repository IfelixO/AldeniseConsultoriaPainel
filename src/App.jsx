import { useState } from 'react'
import logo from './assets/img/logo.png';
import './App.css'
import api from './assets/services/api';
import { useNavigate } from "react-router-dom";


export default function App() {
  const navigate = useNavigate()
  const [login, setLogin] = useState()
  const [senha, setSenha] = useState()

  const cuidarEntrar = () => {
    let adm = {
      login: login,
      senha: senha
    }
    api.post("usuario/loginADM", adm).then((res)=>{
      if(res.data.status){
        navigate('/clientes')
      } else {
      }
    }).catch((err)=>{
      console.log(err)
    })
  }


  return (
    <section className='appTela'>
      <div className='appConteiner'>
        <img src={logo} className='appLogo' alt='Logo principal' title='Aldenise Consultoria Pessoal'/>
        <div className='appFormulario'>
          <input className='appInput' placeholder='Login' onChange={(e)=>{setLogin(e.target.value)}}/>
          <input className='appInput'placeholder='Senha' type='password' onChange={(e)=>{setSenha(e.target.value)}}/>
            <button onClick={cuidarEntrar} className='appBotao' title='Entrar' >Entrar</button>
        </div>
      </div>
    </section>
  )
  }
