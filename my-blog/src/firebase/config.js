import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAtqWM7I0emphYHj5Ewejh2jPkh8APq2NU",
    authDomain: "vuex-4-fb-auth-b2939.firebaseapp.com",
    projectId: "vuex-4-fb-auth-b2939",
    storageBucket: "vuex-4-fb-auth-b2939.appspot.com",
    messagingSenderId: "55395311342",
    appId: "1:55395311342:web:260e48f70aa9fb22ad9dff"
}

//init firebase
initializeApp(firebaseConfig)

//init firebase auth
const auth = getAuth()

export { auth }
