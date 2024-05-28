const { Router } = require('express');
const { login, register, refreshToken } = require('../app/controllers/auth.controller');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

module.exports = router;
