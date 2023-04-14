const {Router} = require('express');
const { gettodomodel, savetodomodel, deletedtodomodel, updatetodomodel } = require('../controllers/todocontrollers');

const router = Router()

//Geting the request from user and respoding in the form of JSON file
//using postman for various methods
router.get('/', gettodomodel)
router.post('/save', savetodomodel)
router.post('/delete', deletedtodomodel)
router.post('/update', updatetodomodel)

module.exports = router;

