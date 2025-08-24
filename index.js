// console.log(__filename);
// const gs = require("fs").writeFileSync;

// gs("acd.txt","hiiii")






// const abc = require('http');


// abc.createServer((req,res)=>{
//     res.write("<h1>hello</h1>");
//     res.end();
// }).listen(4500);
// ..............
// const abd =(req,res)=>
// {
//     res.write("hello rohan jee");
//     res.end();
// }

// abc.createServer(abd).listen(4500);



// abc.createServer((req, res) => {
//     res.write("hello rohan jee");
//     res.end();
// }).listen(4500);

// var colors = require('colors');
// console.log("hello".blue)
// console.log("hello my frend".red)



// const http = require('http');
// const data = require('./data')

// http.createServer((req,res)=>{

//     res.writeHead(404,{'content-type':'application\json'});

//     res.write(JSON.stringify(data));
//    res.end();
// }).listen(5000);
// ...........................................

// console.log(process.argv[2])
// console.log(process.argv[3])

// ........................................
// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])

// }
// else{
//     console.log("invalid input")
// }

// const fs = require('fs');

// const path = require('path');
// const dirPath = path.join(__dirname,'files');

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple tet file");
// }

// fs.readdir(dirPath,(err,file)=>{

//     console.warn(file)

//     file.forEach((item)=>{
//         console.warn(item);
//     })
// })
// ........................................

// const fs = require('fs')

// const path = require('path');
// const dirPath=path.join(__dirname,'crud')
// const filepath = `${dirPath}/rohan.rxt`;

// console.log(dirPath)
// fs.writeFileSync(filepath,'This is a simple text file')
// fs.readFile(filepath,'utf-8',(er,item)=>{
    // console.log(item)
// })

// fs.appendFile(filepath,'and text',(err)=>{

//     if(!err)console.log("file is updated")

// })

// fs.rename(filepath,`${dirPath}/Prakash.txt`,(err)=>{
//     if(!err)
//         console.log("file name is updated")
// })


// fs.unlinkSync(`${dirPath}/Prakash.txt`)
// ............................

// console.log("first")


// setTimeout(()=>{

//     console.log("second")
// },2000)


// console.log("third")
// .............................

// let a=20;

// let b=0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b)
// })

// ..................................


// const express = require('express')
// const app = express();

// app.get("",(req,res)=>{
//     console.log("data sent by browser",req.query.name)

//     res.send('welcom,this is Home page');
// })

// app.get('/about',(req,res)=>{

//     res.send(`
        
//         <input type = "text" placeholder = "User name"/>
        
//         `);
// })


// app.listen(5000);


// ...........................


// const express = require('express')

// const path = require('path')

// const app = express()
// const publicpath=path.join(__dirname,'public');
// console.log(__dirname)

// // app.use(express.static(publicpath));

// app.get('',(req,res)=>{
//     res.sendFile(`${publicpath}/index.html`)
// })


// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicpath}/about.html`)
// })



// app.listen(5000)

// ............Middleware..............


const express = require('express')
const reqFilter =require('./middileware')
const app = express()

// app.use(requireFilter)
app.get('/',(req ,res)=>{

  res.send("hello")
})
app.get('/about',reqFilter,(req ,res)=>{

  res.send("hello ,this is about")
})



app.listen(4000)