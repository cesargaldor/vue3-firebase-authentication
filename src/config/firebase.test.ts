import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: '****',
  authDomain: '****',
  projectId: '****',
  storageBucket: '****',
  messagingSenderId: '****',
  appId: '****',
};

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
