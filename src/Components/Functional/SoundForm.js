import firestorage from '../../lib/Firestore';
import SoundData from '../../lib/SoundData';
import Button from '../Design/Button';
import Div from '../Design/Div';
import Form from '../Design/forms/Form';
import Input from '../Design/forms/Input';
import Label from '../Design/forms/Label';
import Title from '../Design/Title';
import renderEffectForm from './EffectForms';

const handleClick = (e) => {
    e.preventDefault();
    SoundData.sendToFireStore();
}

const SoundForm = () => {
    const d = Div({classList: ['soundForm']});
    const f = Form({classList: ['form']});
    
    d.appendChild(Title({textContent: 'New Sound'}));
    
    //Sound text
    const dText = Div({classList: ['form--select']});
    dText.appendChild(Title({textContent: 'Text', size: 2}));
    dText.appendChild(Label({textContent: 'Enter text', htmlFor: 'text'}));
    const textInput = dText.appendChild(Input({placeholder: 'Text here', name: 'text', id: 'text', value: SoundData.text, classList: ['fill-h']}));
    f.appendChild(dText);
    textInput.oninput = () => {
        SounfData.handleTextAdd(textInput.value);
    }

    //Settings
    SoundData.effects.forEach((effect) => {
        firestorage.getDocument({path: `effecten/${effect}`}).then((doc) => {
            f.appendChild(renderEffectForm(doc));
        })
    })

    //submit button
    const b = Button({textContent: 'Add', onClick: handleClick, classList: ['clearPortal', 'full'], type: 'submit' })
    f.appendChild(b);

    d.appendChild(f);    
    return d;
}

export default SoundForm;