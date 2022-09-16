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
            msg: "Usuario no existe con el id" + id,
        });
    }
    res.json({
        id,
        usuario,
    });
});
exports.getUsuarioById = getUsuarioById;
// Crear un usuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuarioModel_1.default.findOne({
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
        const usuario = yield usuarioModel_1.default.create(body);
        res.status(201).json({
            msg: "Usuario creado correctamente",
            usuario,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Por favor comuníquese con el administrador",
        });
    }
});
exports.postUsuario = postUsuario;
// Actualizar un usuario
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuarioModel_1.default.findByPk(id);
        if (!usuario) {
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
        yield (usuario === null || usuario === void 0 ? void 0 : usuario.update(body));
        res.status(201).json({
            msg: "Usuario creado correctamente",
            usuario,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Por favor comuníquese con el administrador",
        });
    }
});
exports.putUsuario = putUsuario;
// Eliminar (IMPORTANTE: SOLO SE DESHABILITA) usuario
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuarioModel_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: "Usuario no existe con el usuario",
        });
    }
    // Eliminación física
    // await usuario.destroy();
    // Eliminación lógica
    yield (usuario === null || usuario === void 0 ? void 0 : usuario.update({ estado: false }));
    res.status(200).json({
        msg: "Usuario eliminado correctamente",
        usuario,
    });
    res.json({
        msg: "deleteUsuario Controller",
        id,
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarioController.js.map