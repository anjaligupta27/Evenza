const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* STORAGE */

let events = [];
let users = [];

/* HOME ROUTE */

app.get("/",(req,res)=>{
res.send("College Event Management System Backend Running");
});

/* CREATE EVENT */

app.post("/events",(req,res)=>{

const event = req.body;

console.log("Event received:", event);

events.push(event);

res.json({
message:"Event created successfully"
});

});

/* GET EVENTS */

app.get("/my-events",(req,res)=>{
res.json(events);
});

/* REGISTER USER */

app.post("/register",(req,res)=>{

const user = req.body;

users.push(user);

console.log("User registered:", user);

res.json({
message:"Registration successful"
});

});

/* GET USERS (optional for testing) */

app.get("/users",(req,res)=>{
res.json(users);
});

/* SERVER */

app.listen(5000,()=>{
console.log("Server running on port 5000");
});
