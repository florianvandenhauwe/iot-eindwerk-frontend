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
import Title from '../Design/Title';


const NewSound = () => {
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
    return f;
}

export default NewSound;