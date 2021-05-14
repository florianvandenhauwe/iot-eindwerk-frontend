import Elements from '../../lib/ElementFunctions';
import firestorage from '../../lib/Firestore';
import Button from '../Design/Button';
import Div from '../Design/Div';
import Form from '../Design/forms/Form';
import Input from '../Design/forms/Input';
import Label from '../Design/forms/Label';
import Select from '../Design/forms/Select';
import Title from '../Design/Title';

const handleClick = () => {
    console.log('clicked');
}

const SoundForm = () => {
    const d = Div({classList: ['soundform']});
    const f = Form();
    
    d.appendChild(Title({textContent: 'New Sound'}));
    
    //Sound text
    const dText = Div({classList: ['form--text']});
    dText.appendChild(Label({textContent: 'Enter text', htmlFor: 'text'}));
    dText.appendChild(Input({placeholder: 'Text here', name: 'text'}));
    f.appendChild(dText);
    
    //Settings
    firestorage.getCollection({path: 'effecten'}).then((data) => {
        data.forEach((doc) => {
            const fSelect = Div({classList: ['form--select']});
            fSelect.appendChild(Title({textContent: Elements.toUpper(doc.id), size: 2}));
            for (const [key, value] of Object.entries(doc.data())) {
                fSelect.appendChild(Label({textContent: Elements.toUpper(key), htmlFor: key}));
                fSelect.appendChild(Input({value}))
            }
            f.appendChild(fSelect);
        })
    })

    //submit button
    const b = Button({textContent: 'Add', onClick: handleClick, style: 'primary abs-down-center' })
    f.appendChild(b);

    d.appendChild(f);    
    return d;
}

export default SoundForm;