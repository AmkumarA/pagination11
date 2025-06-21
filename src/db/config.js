import { config as configDotenv } from "dotenv";

configDotenv()

const _envConfig = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
    DB_PASS: process.env.DB_PASS
}

export const envConfig = Object.freeze(_envConfig) 