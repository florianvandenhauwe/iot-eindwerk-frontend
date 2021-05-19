import firestorage from '../../lib/Firestore';
import Div from '../Design/Div';
import SoundCard from '../Design/SoundCard';

const SoundList = () => {
    const soundList = Div({
        classList: ['soundList']
    });
    const sounds = firestorage.listenCollection({
        path: `savedSounds`,
        callback: ((snapshot) => {
            snapshot.docChanges().forEach(async (change) => {
                const sound = change.doc;
                if (change.type === 'added') {
                    // render all sounds
                    soundList.appendChild(SoundCard(sound));
                } else if (change.type === 'removed') {
                    const removedSound = soundList.querySelector(`#${change.doc.id}`);
                    soundList.removeChild(removedSound);
                }
            });
        }),
    });

    return soundList;
};

export default SoundList;