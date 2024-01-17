const AWS = require('aws-sdk');

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'
});

// Create an S3 service object
const s3 = new AWS.S3();

// Specify the bucket name and file key
const bucketName = 'your-s3-bucket-name';
const fileKey = 'example.txt';

// Specify the content to upload to S3
const fileContent = 'Hello, AWS S3!';

// Upload content to S3
const params = {
  Bucket: bucketName,
  Key: fileKey,
  Body: fileContent
};

s3.upload(params, (err, data) => {
  if (err) {
    console.error('Error uploading to S3:', err);
  } else {
    console.log('Successfully uploaded to S3:', data.Location);
  }
});
