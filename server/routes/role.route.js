import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import roleCtrl from '../controllers/role.controller';
import config from '../../config/config';

const router = express.Router(); 

router.route('/save')
  .post(roleCtrl.saveRole);

router.route('/')
  .get(roleCtrl.getRoles); 

router.route('/roleForOptions')
  .get(roleCtrl.roleForOptions); 

router.route('/update')
  .post(roleCtrl.updateRole);   


router.route('/delete')
  .post(roleCtrl.deleteRole);   

export default router;
