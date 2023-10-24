import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqResApi';
import { ReqResListado, Usuario } from '../interfaces/reqResInterface';

export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(0);

  useEffect(() => {
    cargarUsuarios();
  }, [])

  // ================================

  const cargarUsuarios = async() => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })
    // ================
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current ++;
    } else {
      console.log('No hay más registros');
    }
  } 

  // ================================

  const renderItem = ({id,first_name,last_name,email,avatar}:Usuario) => {
    return (
      <tr key={id.toString()}>
        <td><img src={avatar} alt={first_name} style={{width:50, borderRadius:100}} /></td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  // ================================

  return (
    <>
        <h3>Usuarios:</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map(renderItem)
            }
          </tbody>
        </table>

        <button className="btn btn-primary" onClick={cargarUsuarios}>Siguiente</button>

        

        {/* ========================== */}

        

        {/* ========================== */}

        

        
    </>
  )
}
