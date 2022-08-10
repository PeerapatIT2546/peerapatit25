const http = require('http');
const fs = require('fs')

const index = fs.readFileSync('${__dirname}/html/Login.html','utf-8')

const server = http.createServer((req,res)=>{

    const pathName = req.url
    console.log("url = ",pathName)
    if(pathName==="/" || pathName==="/home"){
        res.end(index)
    }else if(pathName==="/01"){
        res.end(Page01)
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})
server.listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})