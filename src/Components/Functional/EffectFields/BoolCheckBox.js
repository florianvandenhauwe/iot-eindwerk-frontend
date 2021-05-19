import Div from '../../Design/Div';
import Checkbox from '../../Design/forms/Checkbox';
import Label from '../../Design/forms/Label';
import TextBlock from '../../Design/Text';

const BoolCheckBox = ({obj, label = '', name = '', onInput}) => {
    const fCheck = Div({classList: ['form--checkbox']});
    fCheck.appendChild(Label({textContent: label, htmlFor: name}));
    const check = fCheck.appendChild(Checkbox({ name, id: name}))
    const text = fCheck.appendChild(TextBlock({textContent: 'No', classList: ['mb-1']}))
    check.oninput = () => {
        const { checked } = check;
        text.innerHTML = `${check.checked ? 'Yes' : 'No'}`;
        onInput({obj, name, value: checked ? 'True' : 'False'});
    }
    return fCheck;
}

export default BoolCheckBox;