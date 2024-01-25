import express from 'express';
import { loginUser,registerUser,getMe} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', loginUser);
router.get('/get',protect,getMe)


export default router;
