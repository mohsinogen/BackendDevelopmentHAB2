import multer from "multer"
import path from "path"
import { formatDate } from "../utils/helper.js";

const storage = multer.diskStorage({
    destination: 'myFiles/',
    filename: function (req, file, cb){

        const fileName = file.originalname.replace(/\.[^/.]+$/, "") + formatDate(new Date()) + path.extname(file.originalname);

        cb(null, fileName)
    }
})


const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        console.log(file);
        const acceptedFiles = ['.png', '.json','.html']

        const fileExtension = path.extname(file.originalname)

        if(acceptedFiles.includes(fileExtension)){
            cb(null, true)
        } else{
            cb(new Error("This file type is not supported"))
        }
    }
})

export { upload }