// firebase-messaging-sw.js

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// --- PASTE YOUR FIREBASE CONFIG OBJECT HERE AGAIN ---
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFUnalA7gBmwYqCXfsRtZugBfDWpT_uQo",
  authDomain: "demoshop-cb486.firebaseapp.com",
  projectId: "demoshop-cb486",
  storageBucket: "demoshop-cb486.firebasestorage.app",
  messagingSenderId: "773221651282",
  appId: "1:773221651282:web:1ca1e2527ecd584675e08b"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/images/logo.png' // Optional: path to an icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
