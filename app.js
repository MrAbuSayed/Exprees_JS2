const express=require('express');
const app=express(); 
const bodyParser = require('body-parser');

// Catch the data from quary peramitter 
// app.get('/',(req,res)=>{
//     // http://localhost:1050/?id=1        এইভাবে query peramiter send করতে হয়
//     // একাধিক query peramiter send করতে হলে প্রথম peramiter এর পড়ে & দিয়ে পরবর্তী peramiter দিতে হয়; 
//     // যেমন ঃ http://localhost:1050/?id=1&name=abu sayed ;

//     const id=req.query.id;
//     const name=req.query.name;


//     res.send(`The Student Id is ${id} and his name is ${name}`); 

// });


// Catch the data from route peramitter 

// app.get('/user/:id/:name',(req,res)=>{
//     const id=req.params.id;
//     const name=req.params.name;


//     res.send(`The Student Id is ${id} and his name is ${name}`); 

// });

// Catch the data from Header
// app.get('/user',(req,res)=>{
//     const id=req.header('id');
//     const name=req.header('name');


//     res.send(`The Student Id is ${id} and his name is ${name}`); 

// });




// make post request with josn or from data with postman


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // POST /login gets urlencoded bodies
// app.post('/userInfo', (req, res)=>{
//     const name= req.body.name;
//     const age= req.body.age;
//   res.send(`The User name is ${name} and is  ${age}`);
// });


// send and receive form data from HTML form

// 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/allFile/register.HTML");
});

app.post('/register',(req,res)=>{

  const nam=req.body.name;
  const email=req.body.email;
  const phone=req.body.phone;

  res.send(`<h1>The user name Is : {${nam}}</h1> 
   <h2>Email is : {${email}} </h2>
  <h3> Phone is: {${phone}}</h3>`);

 // 

});




module.exports=app;