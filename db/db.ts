import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DBPASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
});

