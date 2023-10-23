import {TiposBasicos} from './typescript/TiposBasicos'
import {ObjetosLiterales} from './typescript/ObjetosLiterales'
import {Funciones} from './typescript/Funciones';
import {Contador} from './components/Contador';
import {ContadorConHook} from './components/ContadorConHook';
import {Login} from './components/Login';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>hola</h1>

      <hr />

      <TiposBasicos/>

      <hr />

      <ObjetosLiterales/>

      <hr />

      <Funciones/>

      <hr />

      <Contador/>

      <hr />

      <ContadorConHook/>

      <hr />

      <Login/>
    </div>
  )
}

export default App

