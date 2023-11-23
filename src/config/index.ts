import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:(process.cwd(),'.env')})

export default{
    port: process.env.PORT,
    DB_URL: process.env.DB_URL
} 