// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get, update } from 'firebase/database';
import { useCallback } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCvO65cITxEl14r749FD6A3BrvuGdxFouo',
  authDomain: 'esp22-4b263.firebaseapp.com',
  databaseURL: 'https://esp22-4b263.firebaseio.com',
  projectId: 'esp22-4b263',
  storageBucket: 'esp22-4b263.appspot.com',
  messagingSenderId: '907040245981',
  appId: '1:907040245981:web:561a1d918e23239481b334',
  measurementId: 'G-HZBFV30LYF',
  synchronizeTabs: true,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getDatabase(app);
// let answer = [];
export const updateWater = async (id, data) => {
  const baseRef = ref(db, 'Water');
  const starCountRef = ref(db, 'Water/' + id);

  await update(starCountRef, data);
  let alltanks = await get(baseRef);
  alltanks = alltanks.val();
  return alltanks;
};
export const WaterHooks = () => {
  const getWater = useCallback(() => {
    const starCountRef = ref(db, 'Water');

    return get(starCountRef).then((snap) => {
      return snap.val();
    });
  }, []);
  const addWater = useCallback((data) => {
    const starCountRef = ref(db, 'Water');

    return starCountRef
      .push(data)
      .then((snap) => {
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const deleteWater = (id) => {
  //   const starCountRef = ref(db, 'Water');

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
  // const getWaterByStatus = (status) => {
  //   const starCountRef = ref(db, 'Water');

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
    getWater,
    addWater,
    // deleteWater,
  };
};

// const db = getDatabase();

// const starCountRef = ref(db, "Water/" + postId + "/starCount");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
// write a function getData that will fetch the all the data concerning water from the database
