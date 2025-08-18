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



const http = require('http');
const data = require('./data')

http.createServer((req,res)=>{

    res.writeHead(404,{'content-type':'application\json'});

    res.write(JSON.stringify(data));
   res.end();
}).listen(5000);