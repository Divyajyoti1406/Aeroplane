
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAjSrVYQTFGpb-KIIYYC4Ez-cEFitb1mVQ",
  authDomain: "react-crud-db870.firebaseapp.com",
  databaseURL: "https://react-crud-db870.firebaseio.com",
  projectId: "react-crud-db870",
  storageBucket: "react-crud-db870.appspot.com",
  messagingSenderId: "552750858628",
  appId: "1:552750858628:web:9e8ed05c87718695d0ddd1"
};
// Initialize Firebase
 var fireDb=firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();