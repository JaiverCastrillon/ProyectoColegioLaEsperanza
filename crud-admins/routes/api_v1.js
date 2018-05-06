const express = require('express');
const router = express.Router();

const Admin = require('../models/admin');

router.get('/admins', (req,res) => {
    Admin.find({},(err,admins) => {
        res.json(admins);
    });

});

module.exports = router;