import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(express.static(
    path.join(process.cwd(),'public')
));

app.get('/',(req,res)=>{
    res.sendFile(
        path.join(process.cwd(),'public','html','index.html')
    )
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})



