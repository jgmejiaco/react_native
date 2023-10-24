import {TiposBasicos} from './typescript/TiposBasicos'
import {ObjetosLiterales} from './typescript/ObjetosLiterales'
import {Funciones} from './typescript/Funciones';
import {Contador} from './components/Contador';
import {ContadorConHook} from './components/ContadorConHook';
import {Login} from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS React Native</h1>

      <hr />
      <hr />
      <hr />

      <Formularios/>

      <hr />
      <hr />
      <hr />

      {/* <Usuarios/> */}

      <hr />
      <hr />
      <hr />

      {/* <Login/> */}

      <hr />
      <hr />
      <hr />

      {/* <ContadorConHook/> */}

      <hr />
      <hr />
      <hr />
      
      {/* <Contador/> */}

      <hr />
      <hr />
      <hr />

      {/* <Funciones/> */}

      <hr />
      <hr />
      <hr />

      {/* <ObjetosLiterales/> */}

      <hr />
      <hr />
      <hr />

      {/* <TiposBasicos/> */}

      <hr />
      <hr />
      <hr />

    </div>
  )
}

export default App

