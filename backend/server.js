

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");



const app = express();
app.use(express.json())

app.use(cors());


const db = mysql.createConnection({
    host : 'localhost',
    user : "root",
    password : "",
    database : "gopi"
})


app.get("/",(request,response) => {
    const sqlQuery = 'SELECT * FROM STUDENT'; 
    db.query(sqlQuery,(error,result) => {
        if(error){
            return response.json("Error")
        }
        return response.json(result)


    })

})



app.post("/create",(request,response) => {
    const sqlQueryCreate = 'INSERT INTO STUDENT (`Name`,`Email`) VALUES(?)';
    const values = [
        request.body.name,
        request.body.email
    ]
    db.query(sqlQueryCreate,[values],(error,result) => {
        if(error){
            return response.json("Error")
        }
        return response.json(result)
    })
    

})


app.put("/update/:id",(request,response) => {
    const sqlQueryUpdate = 'UPDATE STUDENT SET `Name` = ? , `Email` = ? WHERE ID = ?';
    const values = [
        request.body.name,
        request.body.email
    ]
    const id = request.params.id;
    db.query(sqlQueryUpdate,[...values,id],(error,result) => {
        if(error){
            return response.json("Error")
        }
        return response.json(result)
    })

})


app.delete("/student/:id",(request,response) => {
    const sqlQueryDelete = 'DELETE FROM STUDENT WHERE ID = ?';
    const id = request.params.id;
    db.query(sqlQueryDelete,[id],(error,result) => {
        if(error){
            return response.json("Erro")
        }
        return response.json(result)
    })


})


app.get("/server",(request,response) => {
    return response.json("from server side")
})


app.listen(3005,() => {
    console.log('Server is running at http://localhost:3005')

});








