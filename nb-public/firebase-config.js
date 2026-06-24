// Newbridge Innovations — Public Site Firebase Config
// Read-only: loads published site content from Firestore
const firebaseConfig = {
  apiKey: "AIzaSyB5vINDBusLplpdKR8knAtBWaQCzlETPIE",
  authDomain: "newbridge-corporate-learning.firebaseapp.com",
  projectId: "newbridge-corporate-learning",
  storageBucket: "newbridge-corporate-learning.firebasestorage.app",
  messagingSenderId: "639338820080",
  appId: "1:639338820080:web:efed52a3b2ab69352c2d35"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Public site collection keys
const PUB = {
  SITE_CONTENT: 'nb_site_content',
  TESTIMONIALS: 'nb_testimonials',
  PROGRAMS: 'nb_programs',
};
