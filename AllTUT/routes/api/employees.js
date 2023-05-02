const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeeController');
// const verifyJWT = require('../../middleware/verifyJWT');

router
    .route('/')
    // .get(verifyJWT, employeesController.getAllEmployee) // put middleware jwt one by one
    .get(employeesController.getAllEmployee)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id').get(employeesController.getEmployee);

module.exports = router;
