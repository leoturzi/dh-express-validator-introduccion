const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const validator = require('../middleware/createFormValidator');

// Todos los usuarios
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
// pasamos nuestro validador
router.post('/create', validator.validations, controller.store);

// Detalle de un usuario
router.get('/:id', controller.show);

module.exports = router;
