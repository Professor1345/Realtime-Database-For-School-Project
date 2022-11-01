// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, update } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ZYzZ_PpWgKsw1PGKJe6PkbvwGDXPIXw",
  authDomain: "door-access-control-b93ab.firebaseapp.com",
  databaseURL: "https://door-access-control-b93ab-default-rtdb.firebaseio.com",
  projectId: "door-access-control-b93ab",
  storageBucket: "door-access-control-b93ab.appspot.com",
  messagingSenderId: "361100556739",
  appId: "1:361100556739:web:cfb449e04d245cc6b2a576",
  measurementId: 'G-HZBFV30LYF',
  synchronizeTabs: true,
};
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res);
    // PUSH to auth page
  } catch (error) {
    console.log(error);
  }
};
export const CheckLoginStatus = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);
  return { user };
};
const logout = () => {
  signOut(auth);
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
// let answer = [];
export const updateDoor = async (id, data) => {
  const baseRef = ref(db, 'Door');
  const starCountRef = ref(db, 'Door/' + id);

  await update(starCountRef, data);
  let alltanks = await get(baseRef);
  alltanks = alltanks.val();
  return alltanks;
};
export const DoorHooks = () => {
  const getDoor = useCallback(() => {
    const starCountRef = ref(db, 'Door');

    return get(starCountRef).then((snap) => {
      return snap.val();
    });
  }, []);
  const addDoor = useCallback((data) => {
    const starCountRef = ref(db, 'Door');

    return starCountRef
      .push(data)
      .then((snap) => {
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const deleteDoor = (id) => {
  //   const starCountRef = ref(db, 'Door');

  //   return starCountRef
  //     .child(id)
  //     .remove()
  //     .then(() => {
  //       return true;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getDoorByStatus = (status) => {
  //   const starCountRef = ref(db, 'Door');

  //   return get(starCountRef)
  //     .then((snap) => {
  //       return snap.val();
  //     })
  //     .then((snap) => {
  //       return snap.val().filter((item) => {
  //         return item.status === status;
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return {
    getDoor,
    addDoor,
    // deleteDoor,
  };
};

// const db = getDatabase();

// const starCountRef = ref(db, "Door/" + postId + "/starCount");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
// write a function getData that will fetch the all the data concerning Door from the database
