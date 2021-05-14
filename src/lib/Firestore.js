import firebase from 'firebase/app';
import 'firebase/firestore';

const firestorage = {
  getCollection({ path, order = null, filter = null }) {
    if (filter) return firebase.firestore().collection(path).where(...filter).get();
    if (order) return firebase.firestore().collection(path).orderBy(...order).get();
    if (order && filter) {
      return firebase.firestore().collection(path).where(...filter).orderBy(...order)
        .get();
    }
    return firebase.firestore().collection(path).get();
  },
  listenCollection({ path, callback }) {
    return firebase.firestore().collection(path)
      .onSnapshot(callback);
  },
}

export default firestorage;