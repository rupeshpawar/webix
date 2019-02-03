import express from 'express';
import authRoutes from './auth.route';
import roleRoutes from './role.route';
import userRoutes from './user.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount auth routes at /auth
router.use('/auth', authRoutes);
router.use('/role', roleRoutes);
router.use('/user', userRoutes);

export default router;
