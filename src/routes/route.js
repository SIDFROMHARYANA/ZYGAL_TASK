// routes/Route.js
const express = require('express');
const UserController = require('../Controllers/UserController');

const router = express.Router();

// Login route using UserController
router.post('/login', UserController.login);
router.post('/submit', UserController.submit);
router.post('/search', UserController.seacrh);
router.post('/clear', UserController.clear);
router.get('/logout', UserController.logout);




module.exports = router;
