import initFirebase from '../lib/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

class App {
    constructor() {
        this.parent = document.getElementById('app');
        this.portal = document.getElementById('portal');
        initFirebase();
        this.db = firebase.firestore();
      }

    resetBody() {
        this.parent.innerHTML = '';
    }

    addComponent(component) {
        this.parent.appendChild(component);
    }
}

export default new App;