//How our data is going to be stored in the database 

const todomodel = require("../models/todomodel")

module.exports.gettodomodel = async(req,res)=>{
    const todo = await todomodel.find();
    res.send(todo)
}


module.exports.savetodomodel = async(req,res)=>{
    const {text} = req.body

    todomodel
    .create({text})
    .then((data)=> {
        console.log("Added Sucessfully....");
        console.log(data);
        res.send(data);
    })
}


module.exports.updatetodomodel = async(req,res)=>{
    const {_id, text} = req.body

    todomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=> {
        res.send("Update Sucessfully");
    })
    .catch((err)=>console.log(err))
}


//201 - status code for deletion which informs the derver that the request is being performed and there is nothing to return back to the server
module.exports.deletedtodomodel = async(req,res)=>{
    const {_id} = req.body;

    todomodel
    .findByIdAndDelete(_id)
    .then(()=> {
        res.set(201).send("Deleted Sucessfully");
    })
    .catch((err)=>console.log(err))
}