const express = require("express");
const app = express();
app.use(express.json());

const todos = [];
                 
            //  CRUD opperation

            // Create todos
app.post('/',function(req,res){
    const id = req.body.id;
    const task = req.body.task;
    todos.push({
        id:id,
        task:task
    })
    res.json({
        msg:"done"
    })
}) 

                 //Read todos
app.get('/',function(req,res){
    res.json(todos);
})

               //Update todos
app.put('/',function(req,res){
    const id = req.body.id;
    const task = req.body.task;
    for(let i = 0 ; i < todos.length ;i++){
        if(todos[i].id === id) todos[i].task = task;
    }
    res.json({
        msg:"done"
    })
})  

         //Delete todos
app.delete('/',function(req,res){
    const id = req.body.id;
    for(let i = 0 ;i < todos.length ;i++){
        if(todos[i].id === id) todos.slice(i,1);
    }
    res.json({
        msg:"done"
    })
})
app.listen(3000,() => console.log("app listing on the port 3000"));
