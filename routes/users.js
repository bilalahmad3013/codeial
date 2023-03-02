const express=require('express');
const router=express.Router();

const users_controller=require('../controllers/user_controller');

router.get('/profile', users_controller.profile);
router.get('/signUp', users_controller.signUp);
router.get('/signIn', users_controller.signIn);
router.post('/create',users_controller.create);
router.post('/createSession', users_controller.createSession);

module.exports=router;