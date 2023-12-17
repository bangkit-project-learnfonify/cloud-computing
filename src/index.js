import express from 'express'
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();

const app = express()
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cookieParser())

const port = process.env.PORT || 5000

app.use(router)
app.listen(port, () => {
    console.log('Server listening on port 5000')
}
)
