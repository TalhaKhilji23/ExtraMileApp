// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGA13Mp_-DOrPfuYSTxYjAl7ITooALLwc',
  authDomain: 'extramile-d686d.firebaseapp.com',
  projectId: 'extramile-d686d',
  storageBucket: 'extramile-d686d.appspot.com',
  messagingSenderId: '706139529321',
  appId: '1:706139529321:web:e65433987f7d9794cd42f8',
  databaseURL: 'https://extramile-d686d-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export {database, auth, storage};
