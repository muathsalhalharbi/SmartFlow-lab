// config.js
const firebaseConfig = {
  apiKey: "AIzaSyAwAQuib75KJFpobnB6URoL7uTVqP4Dol0",
  authDomain: "lab-queue-856a8.firebaseapp.com",
  projectId: "lab-queue-856a8",
  storageBucket: "lab-queue-856a8.firebasestorage.app",
  messagingSenderId: "905041727722",
  appId: "1:905041727722:web:a088da2a1ec2c4c22a0793"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();