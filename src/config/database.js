import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

export const startDB = async () => {
    try {
       await sequelize.authenticate();
        console.log("La base de datos se conectó correctamente");
       await  sequelize.sync({alter: true});
    } catch (error){
        console.log(`Error al conectarse con la base de datos`, error);
    }
};
export default sequelize