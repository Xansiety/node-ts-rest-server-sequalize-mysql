import dotenv from 'dotenv'
import Server from './models/server';

// Configurar dotenv
dotenv.config();

// Escuchar el servidor
const server = new Server();
server.listen()