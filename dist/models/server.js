"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("../routes/usuarioRoutes"));
class Server {
    constructor() {
        this.paths = {
            usuarios: "/api/usuarios",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        // Definir e inicializar mis rutas
        this.routes();
    }
    routes() {
        // rutas separadas
        this.app.use(this.paths.usuarios, usuarioRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto: ", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map