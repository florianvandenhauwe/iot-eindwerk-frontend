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
  async getDocument({path}) {
    const query = await firebase.firestore().doc(path).get();
    return query;
  },
  updateDoc({ path, items }) {
    firebase.firestore().doc(path).update(items);
  },
  addDoc({ path, items }) {
    firebase.firestore().collection(path).add(items);
  },
  setDoc({ path, items }) {
    firebase.firestore().doc(path).set(items);
  },
  deleteDoc({ path }) {
    firebase.firestore().doc(path).delete();
  },
}

export default firestorage;