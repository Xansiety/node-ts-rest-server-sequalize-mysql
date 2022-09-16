"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
const usuarioRouter = (0, express_1.Router)();
// Obtener todos los usuarios
usuarioRouter.get('/', usuarioController_1.getUsuarios);
// Obtener usuario por id
usuarioRouter.get('/:id', usuarioController_1.getUsuarioById);
// Crear usuario
usuarioRouter.post('/', usuarioController_1.postUsuario);
// Actualizar usuario
usuarioRouter.put('/:id', usuarioController_1.putUsuario);
// Eliminar usuario
usuarioRouter.delete('/:id', usuarioController_1.deleteUsuario);
exports.default = usuarioRouter;
//# sourceMappingURL=usuarioRoutes.js.map