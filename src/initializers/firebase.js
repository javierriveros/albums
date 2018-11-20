import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBmSDJLA-iULgtLZPRfuLi6kfxehUbKXng",
  authDomain: "albumsreact.firebaseapp.com",
  databaseURL: "https://albumsreact.firebaseio.com",
  projectId: "albumsreact",
  storageBucket: "albumsreact.appspot.com",
  messagingSenderId: "443833222801"
};
firebase.initializeApp(config);

export default firebase;