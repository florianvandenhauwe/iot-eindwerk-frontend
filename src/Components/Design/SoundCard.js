import SoundData from '../../lib/SoundData';
import Button from './Button';
import Div from './Div';
import Title from './Title';

const handleUse = (sound) => {
    SoundData.updateCurrentSound(sound.data());
}

const handleDelete = (sound) => {
    SoundData.deleteSound(sound);
}

const SoundCard = (sound) => {
    const { id } = sound;
    const data = sound.data();
    
    const s = Div({classList: ['soundCard', 'card', 'rounded'], id});
    
    s.appendChild(Title({textContent: data.text, size: 3}));
    s.appendChild(Button({textContent: 'Delete Sound', classList: ['wide', 'danger'], onClick: () => {handleDelete(sound)}}));
    s.appendChild(Button({textContent: 'Use Sound', classList: ['wide', 'positive'], onClick: () => {handleUse(sound)}}));

    return s;
}

export default SoundCard;