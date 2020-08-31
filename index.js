const http = require('http');
const path = require('path');
const fs   = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url);

    // Serving HTML

    if(req.url === '/'){

        fs.readFile(path.join(__dirname,'public','index.html'),(err,content) =>{
            if (err) throw err;
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(content);
            }
        })        
    }

    if(req.url === '/about/'){

        fs.readFile(path.join(__dirname,'public','about.html'),(err,content) =>{
            if (err) throw err;
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(content);
            }
        })      
    }

    if(req.url === '/api/about/'){
        
        const user = [
            { name: 'Taran', age:'22'},
            { name: 'Taranjeet', age:'22'}
        ]

        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(user))

    }


});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>{
    console.log(`Server is runing at ${PORT}`)
});