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

const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'files');

for(i=0;i<5;i++)
{
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple tet file");
}

fs.readdir(dirPath,(err,file)=>{

    console.warn(file)

    file.forEach((item)=>{
        console.warn(item);
    })
})