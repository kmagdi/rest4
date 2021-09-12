import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import {config} from './dbconfig.js'

const db=mysql.createConnection(config)
const app= express();
app.use(express.json())

app.use(cors());

const PORT=8080;

app.get('/books',(req,res,next)=>{
    console.log('Üdvözöllek a Könyvtár oldalán !')
    db.query('SELECT * from books', (error, results)=> {
        if (error) 
            console.log(error)
        else
            res.send(results)
      });
    });
       

app.post('/kabat/:id',(req,res)=>{
    const {id}=req.params
    const {tipus}=req.body
    if(!tipus)
        res.status(418).send({message:'szükséges a tipus megadása !'})
    res.send({tipus:tipus, id:id})
})

app.listen(PORT,()=>console.log(`server runing on port:${PORT}`));