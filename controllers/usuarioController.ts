import { Request, Response } from "express";

// Obtener todos los usuarios
export const getUsuarios = (req : Request, res: Response ) => {
    res.json({
        msg: 'getUsuarios Controller'
    })
}

// Obtener usuario por ID
export const getUsuarioById = (req : Request, res: Response ) => {
    const {id} = req.params;

    res.json({
        msg: 'getUsuarioById Controller',
        id
    })
}

// Crear un usuario
export const postUsuario = (req : Request, res: Response ) => {
    const {body} = req;

    res.json({
        msg: 'postUsuario Controller',
        body
    })
}

// Actualizar un usuario
export const putUsuario = (req : Request, res: Response ) => {
    const {id} = req.params
    const {body} = req

    res.json({
        msg: 'putUsuario Controller',
        id,
        body
    })
}

// Eliminar (IMPORTANTE: SOLO SE DESHABILITA) usuario
export const deleteUsuario = (req: Request, res: Response) => {
    const {id} = req.params
    res.json({
        msg: 'deleteUsuario Controller',
        id
    })
}

