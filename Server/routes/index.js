const express = require('express');
const router = express.Router;
const {getCharById, login} = require('../controllers');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete('/fav/:id', deleteFav);

module.exports= router;




