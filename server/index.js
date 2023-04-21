import  express  from "express";
import router from './routes/routes.js'
import cors from 'cors';
import DBConnection from "./database/db.js";
const app = express();
app.use(cors());
app.use('/',router);
// app.get('/', (_, res) => {
//     res.status(200).json({ message: 'Welcome to the Support Desk API' })
//   })
const PORT = 8000;
DBConnection();
app.listen(PORT,()=>{
    console.log("server running")
})
