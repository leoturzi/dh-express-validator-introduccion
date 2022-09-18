// traemos la propiedad 'body' del modulo express-validator
const { body, validationResult } = require('express-validator');

// middleware
// creamos una validacion para cada campo del form create
// los campos enviados por post desde el formulario create
// van a ser procesados por nuestro validador
const validator = {
  validations: [
    body('first_name').notEmpty().withMessage('Debes ingresar un nombre'),
    body('last_name').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').isEmail().withMessage('Debes ingresar un email valido'),
  ],
  validationResult,
};

module.exports = validator;
