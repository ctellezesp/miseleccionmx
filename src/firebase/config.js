import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyDdo5WJz4BGpPuc0SpnpbvjASkk7E68c9s",
    authDomain: "mexfutvid.firebaseapp.com",
    databaseURL: "https://mexfutvid.firebaseio.com",
    projectId: "mexfutvid",
    storageBucket: "mexfutvid.appspot.com",
    messagingSenderId: "148695480624",
    appId: "1:148695480624:web:752e8aad765c4aae5bf0f5"
}
class Firebase{

  constructor(){
      firebase.initializeApp(config);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
      this.storage = firebase.storage();
  }
}

export default new Firebase();