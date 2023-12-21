//const multer = require('multer') //

function uploadFile(files: any) {
  /*const storage = multer.diskStorage({
    destination: '../carpeta',
    filename: function (_req: any, file: any, cb: any) {
      var extension = file.originalname.slice(file.originalname.lastIndexOf('.'))
      cb(null, Date.now() + extension)
    }
  })
  const upload = multer({ storage }).array('file')
  return upload*/
}

export default uploadFile
