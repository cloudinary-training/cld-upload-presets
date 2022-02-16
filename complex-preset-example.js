require('dotenv').config()
const cloudinary = require('cloudinary').v2
console.log(cloudinary.config().cloud_name)
cloudinary.api
  .create_upload_preset({
    name: 'process-short-form-video',
    use_filename: true,
    unsigned: false,
    tags: 'short-form-video',
    folder: 'processed',
    eager: [
      { raw_transformation: "f_webm,vc_vp9,q_auto/mp4" },
      { raw_transformation: "f_mp4,vc_h265,q_auto/mp4" },
      { raw_transformation: "f_mp4,vc_h264,q_auto/mp4" },
    ],
    eager_async: true,
    eager_notification_url:"https://webhook.site/263a68f0-4e3d-400a-b1c6-0e2fab690dc9"
  })
  .then(resp => console.log(resp))
  .catch(error => console.error(error))
