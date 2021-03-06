import defaultData from './defaultData';
import firestorage from './Firestore';

class SoundData {
    constructor() {
        this.text = '';
        this.effects = [];
        this.data = {};
        this.lang = 'en';
    }

    clearData() {
        this.data = {};
    }

    handleTextAdd(text) {
        this.text = text;
    }

    checkEffect(e) {
        return this.effects.includes(e);
    }

    handleToggle(e) {
        if (this.checkEffect(e)) {
            this.effects = this.effects.filter(word => e !== word);
        } else {
            this.effects.push(e);
        }
    }

    sendToFireStore() {
        //check if a delay is used and form list
        if(this.data.delay) {
            //overwrite delay object with correct vars
            const { decay_one, decay_two, delay_one, delay_two, gain_in, gain_out, parallel } = this.data.delay;
            this.data.delay = {
                decays: `list((${decay_one || 0},${decay_two || 0}))`,
                delays: `list((${delay_one || 0},${delay_two || 0}))`,
                gain_in: gain_in || defaultData.delay.gain_in,
                gain_out: gain_out || defaultData.delay.gain_out,
                parallel: parallel || defaultData.delay.parallel,
            }
        }
        
        //fill data with default values if they have not been entered by user
        for (const [key, value] of Object.entries(this.data)) {
            this.data[key] = {
                ...defaultData[key],
                ...this.data[key],
            }
        }
        const objectToSend = {
            effects: {
                ...this.data,
            },
            settings: {
                lang: this.lang,
            },
            text: this.text,
        }
        this.updateCurrentSound(objectToSend);
        this.addNewSound(objectToSend)
    }
    
    updateCurrentSound(sound) {
        firestorage.updateDoc({path: 'sendToPython/data', items: sound});
    }
    
    addNewSound(sound) {
        firestorage.addDoc({path: 'savedSounds', items: sound});
    }

    deleteSound(sound) {
        console.log(sound.id);
        firestorage.deleteDoc({path: `savedSounds/${sound.id}`});
    }
}


export default new SoundData;