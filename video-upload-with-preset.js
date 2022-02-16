require('dotenv').config()
const cloudinary = require('cloudinary').v2
console.log(cloudinary.config().cloud_name)

cloudinary.uploader.upload('https://res.cloudinary.com/cloudinary-training/video/upload/v1625797745/climbing.mp4', {
  resource_type: 'video',
  upload_preset: 'process-short-form-video'
})
  .then(uploadResult => {
    console.log(uploadResult)
    console.log(cloudinary.url(`${uploadResult.public_id}`, { secure: true }))
  })
  .catch(error => console.error(error))
