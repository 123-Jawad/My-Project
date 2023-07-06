const pny = require("express");
const app =pny();
const cors = require('cors');
// this is the varaible import from view
const UserData =require('./Model/view')

// this code is for our postman output data show in jason
app.use(pny.json());
app.use(cors());

const mongoose = require("mongoose");
// to connect the database
mongoose.connect("mongodb://127.0.0.1:27017/ProjectDatabase",{
useNewUrlParser: true,
});
// to check the database this code
mongoose.connection.once('open',()=>{
    console.log ("database is connected successfully")
})



const PORT = 4000;

app.listen(PORT , () => {
    console.log("port is connected");
});

// Api from built OR to check the port is running or not
app.get('/home', (req ,res)=>{
    res.send("welcome to node.js")
});

// Api's for creating data

app.post("/create", (req , res)=>{
   const user =new UserData(req.body);
   user.save()
   .then((used) =>{
        res.send(used)
   }).catch((err)=>{
        res.status(500).send(err.message);
   });
});
// Api's for show
app.get("/get", (req , res)=>{
    UserData.find((err , used) => {
        if(err){
            res.send("Api's failed to fetch")
        }else{
            res.send(used);
        }
    });
});
// Api's for edit
app.get("/show/:id", (req , res) =>{
    const id = req.params.id;
    UserData.findById(id ,(used) => {
        res.json(used);
    });
});
// Api for update
app.post("/show/:id" ,(req , res) =>{
    const id= req.params.id;
    UserData.findById(id , (err, used) =>{
        if(err){
            res.send("Api's failed")
        }else{
            used.Name =req.body.Name;
            used.Address =req.body.Address;
            used.Email =req.body.Email;
            used.Phone =req.body.Phone;
            used.Roomtype =req.body.Roomtype;
            used.save().then((used)=>{
                res.json(used);
            }).catch((err) =>{
                res.status("404").send("Api's failed to fetch")
            });
        };
    });
});