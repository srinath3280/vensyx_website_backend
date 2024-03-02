require('dotenv').config();
var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/home',(req,res)=>{
    var data = JSON.parse(fs.readFileSync('files/solutions/bigData.txt'));
    // console.log(data);
    res.json(data);
})

app.listen(process.env.PORT,()=>{console.log("server running on "+process.env.PORT)})