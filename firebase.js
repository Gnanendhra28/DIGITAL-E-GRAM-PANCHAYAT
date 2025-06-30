// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import {getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzwU5u8Wmu5gEIVfuPCJCMdfcnuu8TIDg",
  authDomain: "digital-e-gram-panchayat-b0916.firebaseapp.com",
  projectId: "digital-e-gram-panchayat-b0916",
  storageBucket: "digital-e-gram-panchayat-b0916.firebasestorage.app",
  messagingSenderId: "899784206842",
  appId: "1:899784206842:web:952dd8c903666f36339c43",
  measurementId: "G-ZDT25EQZKX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
