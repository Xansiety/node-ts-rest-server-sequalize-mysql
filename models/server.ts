import express, { Application } from "express";
import cors from "cors"
import usuarioRouter from '../routes/usuarioRoutes';
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string | undefined;
  private paths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    // Conectar a la base de datos
    this.dbConnection()

    // Middleware
    this.Middleware()

    // Definir e inicializar mis rutas
    this.routes()
  }




  Middleware() {
    // CORS
    this.app.use(cors())

    // parseo y lectura del body, sin este método no podremos recibir el body
    this.app.use(express.json())

    // Directorio publico
    this.app.use(express.static("public"))
  }


  async dbConnection() {
    try {
        await db.authenticate()
        console.log('Database Online');
    } catch (error : any) {
        throw new Error(error)
    }
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
