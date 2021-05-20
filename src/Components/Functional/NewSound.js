import firestorage from '../../lib/Firestore';
import SoundData from '../../lib/SoundData';
import {
    checkEffect,
    handleTextAdd,
    handleToggle,
    soundEffects
} from '../../lib/SoundEffects';
import Div from '../Design/Div';
import Checkbox from '../Design/forms/Checkbox';
import Input from '../Design/forms/Input';
import Label from '../Design/forms/Label';
import Select from '../Design/forms/Select';
import Title from '../Design/Title';


const NewSound = async () => {
    const f = Div({
        classList: ['soundForm', 'flex']
    })

    //Sound text
    const dText = Div({
        classList: ['form--text']
    });
    dText.appendChild(Title({
        textContent: 'Text',
        size: 2
    }));
    dText.appendChild(Label({
        textContent: 'Enter text',
        htmlFor: 'text'
    }));
    const textInput = dText.appendChild(Input({
        placeholder: 'Text here',
        name: 'text',
        id: 'text',
        classList: ['fill-h']
    }));
    f.appendChild(dText);
    textInput.oninput = () => {
        handleTextAdd(textInput.value);
    }

    //Sound effects
    soundEffects.forEach(effect => {
        const div = Div({
            classList: ['form--select', 'flex']
        });
        const checkbox = div.appendChild(Checkbox({
            value: effect,
            name: effect,
            id: effect,
            checked: checkEffect(effect)
        }));
        checkbox.addEventListener('click', () => {
            handleToggle(effect)
        })
        div.appendChild(Label({
            textContent: effect,
            htmlFor: effect
        }));
        f.appendChild(div);
    });

    //sound language
    const languages = await firestorage.getDocument({path: 'effecten/language'});
    const select = f.appendChild(Select({name: 'Language', options: languages.data().lang}));
    select.oninput = () => {
        SoundData.lang = select.value;
    }

    return f;
}

export default NewSound;