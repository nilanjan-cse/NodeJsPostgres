const express = require('express');
const app = express();

const {GetData,InsertData} = require("./API_Service");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/",async(req,res)=>{
    const data = req.body["data"];
    const insertQuery = `insert into "UserInfo"."UserCreds" values(default,'${data.name}','${data.email}','${data.password}','${data.phone}')`;
    console.log("Insert Query: "+insertQuery)
    const response = await InsertData(insertQuery);
    res.json(response?"Success":"Failure");
})

app.get("/",async(req,res)=>{
    const getQuery = `select * from "UserInfo"."UserCreds"`;
    const response = await GetData(getQuery);
    res.json(response);
    
    
})

app.listen(5000,function(){
    console.log('Server is listening in port 5000');
})