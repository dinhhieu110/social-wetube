const { Router } = require('express');
const { login } = require('../app/controllers/auth.controller');

const router = Router();

router.get('/login', login);

module.exports = router;
