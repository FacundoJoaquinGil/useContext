import { useContext } from "react";
import { useForm } from "./hooks/userForm";
import { UsuarioContext } from "./Context/UsuarioContext";

const initialForm = {
  nombre: '',
  apellido: '', 
  localidad: '', 
  correo: '' 
}
export const LoginExample = () => {

  const { nombre, apellido, localidad, correo, valuesForm, onInputChange } = useForm(initialForm);
  const { setUsuario } = useContext(UsuarioContext)

  
  const onSubmit = (event) => {
    event.preventDefault()
    setUsuario(valuesForm)
  }

  return (
    <>
      <form className='container' onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre-ejemplo" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido-ejemplo" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            value={apellido}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="localidad-ejemplo" className="form-label">
            Localidad
          </label>
          <input
            type="text"
            className="form-control"
            name="localidad"
            value={localidad}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correo-ejemplo" className="form-label">
            Correo
          </label>
          <input
            type="text"
            className="form-control"
            name="correo"
            value={correo}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};
