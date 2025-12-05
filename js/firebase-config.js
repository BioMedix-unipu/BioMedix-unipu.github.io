import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-messaging.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

console.log("Loading Firebase config module...");

let app;
let db;
let storage;
let messaging;
let analytics;

try {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBBIIcI84iVnUCPLiFhPz6Aw7mZHCXBfAM",
    authDomain: "biomedix-19988.firebaseapp.com",
    projectId: "biomedix-19988",
    storageBucket: "biomedix-19988.firebasestorage.app",
    messagingSenderId: "190778436954",
    appId: "1:190778436954:web:35bb4529555b648f671763",
    measurementId: "G-N94ES01E6B"
  };

  // Add logging for current environment
  console.log("Current hosting environment:", window.location.hostname);
  
  // Initialize Firebase
  console.log("Initializing Firebase...");
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  storage = getStorage(app);
  messaging = getMessaging(app);
  analytics = getAnalytics(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { app, db, storage, messaging, analytics, getToken, onMessage };
