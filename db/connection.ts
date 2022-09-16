import { Sequelize } from 'sequelize';


const db = new Sequelize('rest_node', 'root', 'admin', {
    host: process.env.DB_SERVER,
    dialect: 'mysql'
    // loggin: false,
})

export default db

