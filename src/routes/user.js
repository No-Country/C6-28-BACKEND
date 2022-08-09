import { express } from 'express';
const router = express.Router();
import { getUser } from '../controllers/users.js';

router.get('/users/:id', getUser);

export default router;
