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
  if (!usuario) {
    return res.status(400).json({
      msg: "Usuario no existe con el id" + id,
    });
  }
  res.json({
    id,
    usuario,
  });
};

// Crear un usuario
export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: "Correo ya registrado",
      });
    }
    // https://sequelize.org/v3/docs/instances/
    // Consultando la documentación de Sequelize observo que no es posible utilizar el new ( el por eso del error). Lo que recomiendan es utilizar el método "Create" y te ahorras tambien el save.
    const usuario = await Usuario.create(body);
    res.status(201).json({
      msg: "Usuario creado correctamente",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Por favor comuníquese con el administrador",
    });
  }
};

// Actualizar un usuario
export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {

    const usuario= await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            msg: "Usuario no existe con el usuario",
          });
    }
    // const existeEmail = await Usuario.findOne({
    //   where: {
    //     email: body.email,
    //   }
    // });

    // if (existeEmail) {
    //   return res.status(400).json({
    //     msg: "Correo ya registrado",
    //   });
    // }
    await usuario?.update(body)
    res.status(201).json({
      msg: "Usuario creado correctamente",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Por favor comuníquese con el administrador",
    });
  }
};

// Eliminar (IMPORTANTE: SOLO SE DESHABILITA) usuario
export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUsuario Controller",
    id,
  });
};
