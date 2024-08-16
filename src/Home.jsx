import React, { useContext } from "react";
import { UsuarioContext } from "./Context/UsuarioContext";


export const Home = () => {


  const { usuario } = useContext(UsuarioContext);


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Localidad</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.localidad}</td>
            <td>{usuario.correo}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
