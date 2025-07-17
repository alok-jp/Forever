import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'Uploads/'); // Ensure 'uploads' folder exists
    },
    filename: function(req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: function(req, file, callback) {
        if (!file.mimetype.startsWith('image/')) {
            return callback(new Error('Only images are allowed'));
        }
        callback(null, true);
    }
});

export default upload;