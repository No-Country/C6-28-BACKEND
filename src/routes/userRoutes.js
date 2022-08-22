import express from 'express';
const router = express.Router();
import * as UserRoute from '../controllers/userController.js';
import * as AuthRoute from '../controllers/authController.js';
import multer from 'multer';
import path from 'path';
import * as AuthMiddleware from '../middlewares/authMiddleware.js';

router.post('/login',AuthRoute.login);
router.post('/signup', AuthRoute.signUp);
router.get('/logout', AuthRoute.getLogout);

router.get('/:id', AuthMiddleware.ensureAuth, UserRoute.getUser);
router.get('/', AuthMiddleware.ensureAuth, UserRoute.getAllUsers);
router.delete('/:id', AuthMiddleware.ensureAuth, UserRoute.deleteUser);
router.patch('/:id', AuthMiddleware.ensureAuth, UserRoute.updateUser); 


let uploadFile = multer({ 
    storage,
    destination: path.join(__dirname, "../public/userPhoto"),
    limits: {fileSize: 100000}
}).single('avatar');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/userPhoto");
        cb(null, folder);
},
	filename: function(req, file, cb){
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
}
});

router.post('/uploadFile', uploadFile.single('avatar'), AuthRoute.signUp);

export default router;
