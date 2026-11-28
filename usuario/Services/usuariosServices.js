// este es el intermediario entre las interfaces y el almacenamiento

import {guardar,obtener} from "../Storage/localStorage";

//es una constante para identificar los usuarios
// es la clave eonde almacenaremos todos lo usuarios
const KEY_USUARIOS = 'usuarios';


//esta funcion nos ayudara a recuperar todos los usuarios almacenados
//retorna un arreglo con todos los usaurios
const obtenerListUsuarios = async () => {
    const usuarios = await obtener(KEY_USUARIOS);

    //si no hay ussuarios regres un arreglo vacio
    if (!Array.isArray(usuarios)) {
        return [];
    }
    return usuarios;
}

//es para registrar un usuario
export const registrarUsuarios = async (usuario) => {

    //primero obtenemos todos los usuarios q ya existen, para no sobreescribir alguno
    const usuarios = await obtenerListUsuarios();

    if (!usuario.nombre || !usuario.nombre.trim()) {
        throw new Error('El usuario es obligatorio');
    }

    const edadNumero = Number(usuario.edad)

    if (!Number.isInteger(edadNumero) || edadNumero <= 0) {
        throw new Error('La edad debe ser mayor a cero')
    }

    //es para generar un identificador
    //date.now() devuelve el tiempo actual en milisegundos
    //lo convertimos a texto
    const id = Date.now().toString();

    //creamos un objeto con los datos validos
    const nuevoUsuario = {
        id:id,
        nombre:usuario.nombre.trim(),
        edad:edadNumero
    };


    const usuariosActualizados = [
        ...usuarios, //copiamos los elemntos q ya estaban
        nuevoUsuario //agregamos nuevoUsuario al final
    ]


    //guardamos los cambios
    //se envia el arreglo completo al localStorage
    //KEY_USUARIOS indica donde guardarlo
    await guardar(KEY_USUARIOS,usuariosActualizados);

    //devolvemos el usuario q recien creamos
    //esto para q la interfaz sepa q usuario se agrego
    return nuevoUsuario;
}


//obtener usuarios, obtener todos los usuarios registrados

export const obtenerUsuarios = async () => {
    const usuarios = await obtenerListUsuarios();
    return usuarios;
};

//obtener usaurio por el id

export const obtenerUsuarioPorId = async (id) => {

    //obtenemos el arreglo completo de usaurios
    const usuarios = await obtenerListUsuarios();

    //con el find recorremos el arrelo y devuelve el q coincida con el id
    //item es una variable temporal q es cada usuario
    const usuarioEncontrado = usuarios.find(
        (item) => item.id === String(id)
    );

    return usuarioEncontrado || null;
}


//actualizar el usuario
export const actualizarUsuario = async (id,datosActualizados) => {

    //recuperamos todos los usuarios
    const usuarios = await obtenerListUsuarios();

    //buscamos la posicion del usuario
    //findIndex es tipo find
    //en lugar de devolver el objeto encontrado devuelve la posicion
    //si no encuentra el usuario deveulve un -1
    const indice = usuarios.findIndex(
        (item) => item.id === String(id)
    );

    if (indice === -1) {
        throw new Error('El usuario q intentas modificar no existe');
    }

    //validar el nuevo nombre
    if (!datosActualizados.nombre || !datosActualizados.nombre.trim()) {
        throw new Error('Nombe obligatorio');
    }

    //convertimos la nueva edad a un numero
    const edadNumero = Number(datosActualizados.edad);


    if (!Number.isInteger(edadNumero) || edadNumero <= 0) {
        throw new Error('La edad debe ser un numero positivo');
    }

    //obtenemos el usuario original q vamos a modificar
    const usuarioOriginal = usuarios[indice]

    //creamos el nuevo usuario
    //el spread operator para conservar las propiedades originales
    //despues las ustituimos
    const usuarioActualizado = {
        ...usuarioOriginal,
        nombre: datosActualizados.nombre.trim(),
        edad:edadNumero
    };

    //creamos un nuevo arreglo
    //recorremos el arreglo y si el id coincide sustituimos por el usuarioActualizado
    const usuariosActualizados = usuarios.map(
        (item) => {
            if (item.id === String(id)) {
                return usuarioActualizado
            }
            return item;
        }
    );


    //guardamos el nuevo arreglo en localStorage
    await guardar(KEY_USUARIOS,usuariosActualizados);

    //devolvemos el usuario q fue actualizado
    return usuarioActualizado;
}


//elimnar usaurio
export const eliminarUsuario = async (id) => {

    //obtenemos todos los usuarios
    const usuarios = await obtenerListUsuarios();

    //comprobamos que el usuario a eliminar exista
    const existeUsuario = usuarios.some(
        (item) => item.id === String(id)
    );
    //some devuelve true si al menos un elemnto cumple cn la condicion
    if (!existeUsuario) {
        throw new Error('El usuario no existe');
    }

    const usuariosActualizados = usuarios.filter(
        (item) => item.id !== String(id)
    );

    await guardar(KEY_USUARIOS,usuariosActualizados);

    //indico q la eliminacion fue exitosa
    return true;
}