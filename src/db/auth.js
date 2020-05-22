
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA2BB5q83EVRB2DwCrTnP6PJv71PPVzlT8',
  authDomain: 'giveaway-c64ee.firebaseapp.com',
  databaseURL: 'https://giveaway-c64ee.firebaseio.com',
  projectId: 'giveaway-c64ee',
  storageBucket: 'giveaway-c64ee.appspot.com',
  messagingSenderId: '781517746760',
  appId: '1:781517746760:web:cdbd377ee629734b6e5e7d',
  measurementId: 'G-8XKSYZPZMH'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
