"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("../routes/usuarioRoutes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.paths = {
            usuarios: "/api/usuarios",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        // Middleware
        this.Middleware();
        // Definir e inicializar mis rutas
        this.routes();
    }
    Middleware() {
        // CORS
        this.app.use((0, cors_1.default)());
        // parseo y lectura del body, sin este método no podremos recibir el body
        this.app.use(express_1.default.json());
        // Directorio publico
        this.app.use(express_1.default.static("public"));
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