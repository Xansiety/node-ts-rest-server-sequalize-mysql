"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
// Obtener todos los usuarios
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios Controller'
    });
};
exports.getUsuarios = getUsuarios;
// Obtener usuario por ID
const getUsuarioById = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuarioById Controller',
        id
    });
};
exports.getUsuarioById = getUsuarioById;
// Crear un usuario
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario Controller',
        body
    });
};
exports.postUsuario = postUsuario;
// Actualizar un usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario Controller',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
// Eliminar (IMPORTANTE: SOLO SE DESHABILITA) usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario Controller',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioController.js.map