import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import userCtrl from '../controllers/user.controller';
import config from '../../config/config';

const router = express.Router(); 

router.route('/save')
  .post(userCtrl.saveUser);

router.route('/')
  .get(userCtrl.getUsers); 
  
router.route('/update')
  .post(userCtrl.updateUser);   


router.route('/delete')
  .post(userCtrl.deleteUser);   

export default router;
