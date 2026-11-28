
//guardar datos
export const guardar = async (clave,datos) => {
    try {
        //verificamos que el entorno de ejecucion tenga window
        if (typeof window === 'undefined') {
            throw new Error('El almacenamiento no esta disponible')
        }
        //convertimos los datos con JSON
        const informacion = JSON.stringify(datos);
        window.localStorage.setItem(clave,informacion);
        return true;
    } catch (error) {
        console.error('Error al guardar la informacion',error);
        throw error;
    }
}

//obtener datos
export const obtener = async (clave) => {
    try {
        //verificamos que el entorno de ejecucion tenga window
        if (typeof window === 'undefined') {
            throw new Error('El almacenamiento no esta disponible')
        }

        //aqui busca la informacion segun la clave q le pasamos
        const informacion = window.localStorage.getItem(clave);

        if (informacion === null){
            return null;
        }

        //convertimos a JSON
        const datos = JSON.parse(informacion);

        //Devolvemos la informacion q obtuvimos
        return datos;
    } catch (error) {
        console.error('Error al obtener la info',error)
        throw error;
    }
}

//funcion para eliminar
export const eliminar = async (clave) => {
    try {
        if (typeof window === 'undefined') {
            throw new Error('El almacenamiento no esta disponible')
        }
        window.localStorage.removeItem(clave);
        return true;
    } catch (error) {
        console.error('Error al eliminar la info',error)
        throw error;
    }
}