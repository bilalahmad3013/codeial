const express=require('express');
const router=express.Router();

const posts_controller=require('../controllers/posts_controller');

router.get('/pictures', posts_controller.pictures);
module.exports=router;