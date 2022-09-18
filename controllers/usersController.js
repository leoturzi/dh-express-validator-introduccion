const jsonTable = require('../database/jsonTable');

const usersModel = jsonTable('users');

const validator = require('../middleware/createFormValidator');

module.exports = {
  index: (req, res) => {
    let users = usersModel.all();

    res.render('users/index', { users });
  },
  create: (req, res) => {
    res.render('users/create');
  },
  store: (req, res) => {
    // almacenamos los errores
    let errors = validator.validationResult(req);
    // res.send(errors);
    // si el objeto errors esta vacio, redirijimos al user creado

    if (errors.isEmpty()) {
      let user = req.body;

      userId = usersModel.create(user);

      res.redirect('/users/' + userId);
    } else {
      // sino, imprimimos los errores en en la vista
      res.render('users/create', {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  show: (req, res) => {
    let user = usersModel.find(req.params.id);

    res.render('users/detail', { user });
  },
};
