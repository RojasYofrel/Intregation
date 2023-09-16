const { axios } = require("axios");

// const getCharById = (res,id)=>{
//     const url = `https://rickandmortyapi.com/api/character/:${id}`;
//     axios(url).then((response)=>{
//         const  { name , gender, species, origin:{name:originName},image,status } = response.data;
        
//         res.writeHead(200,{'Content-type': 'application/json'});
//         res.end(JSON.stringify({ id , name, gender, species, origin, image , status}));
//     })
//     .catch( (error)=> {
//         res.writeHead(500,{'Content-type': 'text/plain'} );
//         res.end(error.message);
//       });
// }

// module.exports = getCharById;

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req,res)=>{
    const { id } = req.params
    axios(URL+id).then((response)=>{
        const { status, name, species, origin, image, gender} = response.data;
        if(response.data){
            res.writeHead(200,{'Content-type': ' application/json'});
            res.end(JSON.stringify({ id , name, gender, species, origin, image , status}));
        }else{
            res.status(404).json({status:'not fount'});
        }   
    })
    .catch((error)=>{
        res.writeHead(500),{'Content-type':'text/plain'};
        res.end(error.message);
    })
}

module.exports = getCharById;