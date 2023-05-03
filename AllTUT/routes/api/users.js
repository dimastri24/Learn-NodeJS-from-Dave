const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const errorHandler = require('../../middleware/errorHandler');

router.use(verifyRoles(ROLES_LIST.Admin), errorHandler);

router.route('/').get(usersController.getAllUser).delete(usersController.deleteUser);

router.route('/:id').get(usersController.getUser);

module.exports = router;
