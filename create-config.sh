#!/bin/sh

echo "const config = {
  firebase: {
    apiKey: '$VITE_FIREBASE_API_KEY', 
    authDomain: '$VITE_FIREBASE_AUTH_DOMAIN',
    projectId: '$VITE_FIREBASE_PROJECT_ID',
    storageBucket: '$VITE_FIREBASE_STORAGE_BUCKET', 
    messagingSenderId: '$VITE_FIREBASE_SENDER_ID',
    appId: '$VITE_FIREBASE_APP_ID'
  }, 
  cloudinary: {
    cloudName: '$VITE_CLOUDINARY_CLOUD_NAME',
    uploadPreset: '$VITE_CLOUDINARY_UPLOAD_PRESET'
  },
  razorpay: {
    keyId: '$VITE_RAZORPAY_KEY_ID'
  }
};" > config.js
