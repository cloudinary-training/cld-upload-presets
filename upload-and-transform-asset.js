require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/woman.jpg', {
  public_id: 'woman',
  upload_preset: 'profile-preset'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));
