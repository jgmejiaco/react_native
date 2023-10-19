const Funciones = () => {

    const sumar = (a:number, b:number):number => {
        return a + b;
    }

    return (
        <>
            <h2>Funciones</h2>

            <span>el restulado es {sumar(60, 9)}</span>
        </>
    )
}

export default Funciones
