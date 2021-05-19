import SoundData from './SoundData';

// Step one when adding new effect
// Make sure variable name is the same as in firestore!
const soundEffects = ['delay', 'equalizer', 'phaser', 'pitch', 'reverb', 'tempo'];

const handleTextAdd = (text) => {
    SoundData.text = text;
}

const checkEffect = (effect) => {
    return SoundData.effects.includes(effect);
}

const handleToggle = (effect) => {
    if (SoundData.effects.includes(effect)) {
        SoundData.effects = SoundData.effects.filter(word => effect !== word);
    } else {
        SoundData.effects.push(effect);
    }
}

export { soundEffects, handleTextAdd, checkEffect, handleToggle }