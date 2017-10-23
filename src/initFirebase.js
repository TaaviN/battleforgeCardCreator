import firebase from 'firebase'
import store from './store'
import firebaseui from 'firebaseui'

//firebase.initializeApp({
//  apiKey: "AIzaSyCWQOJPcGeO92Fk9j-cW6WenSmxj6HafPc",
//  authDomain: "battleforge-card-creator.firebaseapp.com",
//  databaseURL: "https://battleforge-card-creator.firebaseio.com",
//  projectId: "battleforge-card-creator",
//  storageBucket: "battleforge-card-creator.appspot.com",
//  messagingSenderId: "774459301247"
//})

var config = {
    apiKey: "AIzaSyAfUNMpgAS4gXLiAFI8fWuzUYiZ6hVvRA4",
    authDomain: "my-first-demo-c4b2a.firebaseapp.com",
    databaseURL: "https://my-first-demo-c4b2a.firebaseio.com",
    projectId: "my-first-demo-c4b2a",
    storageBucket: "",
    messagingSenderId: "375300092507"
  };
  firebase.initializeApp(config);

export const db = firebase.database();

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  var userPayload = {
    displayName: null,
    photoURL: null,
    isAnonymous: true,
  };
  if (user) {
    userPayload.displayName = user.displayName
    userPayload.photoURL = user.photoURL
    userPayload.isAnonymous = user.isAnonymous
  }
  store.commit('UPDATE_USER', userPayload)
})
