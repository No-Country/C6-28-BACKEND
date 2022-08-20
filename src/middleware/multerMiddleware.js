const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/userPhoto");
        cb(null, folder)
},
	filename: function(req, file, cb){
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
}
});

let uploadFile = multer({ 
    storage,
    destination: path.join(__dirname, "../public/userPhoto"),
    limits: {fileSize: 100000}
}).single('avatar')


module.exports = uploadFile;