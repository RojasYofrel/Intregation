let myFavorites = [];

const postFav = (req,res)=>{
    const favorite = req.body;
    myFavorites.push(favorite);
    res.status(200).json(myFavorites);
}

const deleteFav = (req,res)=>{
    const idDelete = req.params.id;
    const personajeEliminar = myFavorites.find(personaje=> personaje.id === idDelete);
    if(personajeEliminar){
        myFavorites = myFavorites.filter(personaje => personaje.id !== idDelete);
        res.status(200).json(myFavorites)
    }else {
        res.status(404).json({ message: 'Personaje no encontrado' });
    }
}

module.exports = {
    postFav,
    deleteFav
}