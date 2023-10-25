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

export const ObjetosLiterales = () => {

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

            <pre>
                {JSON.stringify(persona, null, 2 )}
            </pre>
            
        </>
    )
}
