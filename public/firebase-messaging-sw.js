importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBzFY5-FmLWYSl78kSMyqau2YMYHtoC1ig",
  authDomain: "cse-21-pushnotification.firebaseapp.com",
  projectId: "cse-21-pushnotification",
  storageBucket: "cse-21-pushnotification.appspot.com",
  messagingSenderId: "253963153691",
  appId: "1:253963153691:web:14c686bd9687b369bb23be",
  measurementId: "G-58VM4ZCM37",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
