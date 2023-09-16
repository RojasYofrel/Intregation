const express = require('express');
const server = express();
const PORT = 3001;
//const router = require('./routes/index');


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 server.use(express.json());
 server.use((req,res)=>{
    req.url = `/rickandmorty'${req.url}`
 })
server.listen(PORT,()=>{
    console.log(`Server levantado en el puerto: ${PORT}` );
})



// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     if (url.includes('/rickandmorty/character')){
//         const id = Number(url.split('/').pop());
//         return getCharById(res,id)
        
//     }
//     res.writeHead(404, { 'Content-type': 'application/json'});
//     res.end(JSON.stringify({error: 'not found'}));
// })
// .listen(PORT,'localhost');

