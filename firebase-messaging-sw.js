// firebase-messaging-sw.js

// Import and initialize Firebase
// Note: You must use 'importScripts' in a service worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// IMPORTANT: Add your Firebase config object here.
// It's the same object from your 'create-config.js' file.
const firebaseConfig = {
  apiKey: "AIzaSyCFUnalA7gBmwYqCXfsRtZugBfDWpT_uQo",
  authDomain: "demoshop-cb486.firebaseapp.com",
  projectId: "demoshop-cb486",
  storageBucket: "demoshop-cb486.firebasestorage.app",
  messagingSenderId: "773221651282",
  appId: "1:773221651282:web:1ca1e2527ecd584675e08b"
};

// Initialize the Firebase app in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Handle incoming messages when the app is in the background.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Optional: Add an icon URL
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
