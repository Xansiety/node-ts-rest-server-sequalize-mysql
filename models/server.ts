import express, { Application } from "express";
import usuarioRouter from '../routes/usuarioRoutes';

class Server {
  private app: Application;
  private port: string | undefined;
  private paths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    // Definir e inicializar mis rutas
    this.routes()
  }

  routes() {
    // rutas separadas
    this.app.use(this.paths.usuarios, usuarioRouter)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto: ", this.port);
    });
  }
}

export default Server;
