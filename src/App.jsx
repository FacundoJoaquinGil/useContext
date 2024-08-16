import React from 'react'
import { NavBar } from './navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Error404 } from "./Error404";
import { UsuarioProvider } from './Context/UsuarioProvider';
import { LoginExample } from './LoginExample';


export const App = () => {
  return (
    <UsuarioProvider>
    <NavBar/>
    <h1 className='titulo'>React Router DOM & useContext</h1>
    <hr />

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<AboutMe></AboutMe>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='/login' element={<LoginExample></LoginExample>} ></Route>
      <Route path='/*' element={<Error404></Error404>}></Route>
    </Routes>
    
    </UsuarioProvider>
  )
}
