"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const usuarioModel_1 = __importDefault(require("../models/usuarioModel"));
// Obtener todos los usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarioModel_1.default.findAll();
    res.json({
        usuarios,
    });
});
exports.getUsuarios = getUsuarios;
// Obtener usuario por ID
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuarioModel_1.default.findByPk(id);
    if (!usuario) {
        return res.status(400).json({
            msg: 'Usuario no existe con el id' + id
        });
    }
    res.json({
        id,
        usuario
    });
});
exports.getUsuarioById = getUsuarioById;
// Crear un usuario
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postUsuario Controller",
        body,
    });
};
exports.postUsuario = postUsuario;
// Actualizar un usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "putUsuario Controller",
        id,
        body,
    });
};
exports.putUsuario = putUsuario;
// Eliminar (IMPORTANTE: SOLO SE DESHABILITA) usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteUsuario Controller",
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioController.js.map