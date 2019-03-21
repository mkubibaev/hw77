const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const config = require('../config');
const db = require('../fileDb');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});
const router = express.Router();

router.get('/', (req, res) => {
    res.send(db.getItems());
});

router.post('/', upload.single('image'), (req, res) => {
    if (req.body.message !== '') {
        const boardItem = req.body;
        boardItem.id = nanoid();
    
        if(req.body.author === '') {
            boardItem.author = 'Anonymous';
        }

        if(req.file) {
            boardItem.image = req.file.filename;
        }
    
        db.addItem(boardItem);
        res.send({message: 'OK'});
    } else {
        res.status(400).send({error: 'Messafe text is required!'});
    } 
});

module.exports = router;
