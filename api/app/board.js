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
    const boardItem = req.body;

    if(req.file) {
        boardItem.image = req.file.fieldname;
    }

    db.addItem(boardItem);

    res.send({message: 'OK'});
});

module.exports = router;
