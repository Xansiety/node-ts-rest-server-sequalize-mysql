import { Router } from "express";
import { getUsuarios, getUsuarioById, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarioController';


const usuarioRouter = Router()

// Obtener todos los usuarios
usuarioRouter.get('/', getUsuarios)
// Obtener usuario por id
usuarioRouter.get('/:id', getUsuarioById)
// Crear usuario
usuarioRouter.post('/', postUsuario)
// Actualizar usuario
usuarioRouter.put('/:id', putUsuario)
// Eliminar usuario
usuarioRouter.delete('/:id', deleteUsuario)


export default usuarioRouter