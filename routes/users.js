const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

// traemos la propiedad 'body' del modulo express-validator
const { check, body } = require('express-validator');

// middleware
// creamos una validacion para cada campo del form create
// los campos enviados por post desde el formulario create
// van a ser procesados por nuestro validador
const validator = [
  check('first_name').notEmpty().withMessage('Debes ingresar un nombre'),
  check('last_name').notEmpty().withMessage('Debes ingresar un apellido'),
  check('email').isEmail().withMessage('Debes ingresar un email valido'),
];

// Todos los usuarios
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
// pasamos nuestro validador
router.post('/create', validator, controller.store);

// Detalle de un usuario
router.get('/:id', controller.show);

module.exports = router;
