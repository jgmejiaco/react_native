export const TiposBasicos = () => {
  const nombre: string = 'Fernando';
  const edad: number = 49;
  const estadoActivo: boolean = true;
  const poderes: string[] = [];

  poderes.push('Velocidad');
  poderes.push('Volar');
  poderes.push('Respirar bajo el agua');

  return (
    <>
      <h1>Tipos Básicos TypeScript</h1>

      {nombre}, {edad}, {(estadoActivo) ? 'activo' : 'iactivo'}

      <br />

      {poderes.join(', ')}
    </>
  )
}
