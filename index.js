// console.log(__filename);
// const gs = require("fs").writeFileSync;

// gs("acd.txt","hiiii")

const abc = require('http');


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



abc.createServer((req, res) => {
    res.write("hello rohan jee");
    res.end();
}).listen(4500);