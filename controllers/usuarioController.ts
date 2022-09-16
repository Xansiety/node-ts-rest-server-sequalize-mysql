import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";

// Obtener todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.json({
    usuarios,
  });
};

// Obtener usuario por ID
export const getUsuarioById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if(!usuario){
    return res.status(400).json({
        msg: 'Usuario no existe con el id' + id
    })
  }
  res.json({
    id,
    usuario
  });
};

// Crear un usuario
export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;

  res.json({
    msg: "postUsuario Controller",
    body,
  });
};

// Actualizar un usuario
export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "putUsuario Controller",
    id,
    body,
  });
};

// Eliminar (IMPORTANTE: SOLO SE DESHABILITA) usuario
export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUsuario Controller",
    id,
  });
};
