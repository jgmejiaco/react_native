import TiposBasicos from './typescript/TiposBasicos'
import ObjetosLiterales from './typescript/ObjetosLiterales'
import Funciones from './typescript/Funciones';
import Contador from './components/Contador';

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
    </div>
  )
}

export default App

