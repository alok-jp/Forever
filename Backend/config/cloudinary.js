//we can not directly store the images in database so we upload the images on cloudinary and from there we will get the URL

import { v2 as cloudinary} from "cloudinary";

const connectCloudinary = async () => { 

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary;