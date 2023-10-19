interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

// ====================

interface Direccion {
    pais: string;
    casaNo: number;
}

// =========================================
// =========================================

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'sara',
        edad: 9,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

    return (
        <>
            <h2>ObjetosLiterales</h2>

            {/* {persona} */} {/* saca un error pasando la variable pura */}

            <pre>
                {JSON.stringify(persona, null, 2 )}
            </pre>
            
        </>
    )
}

export default ObjetosLiterales
