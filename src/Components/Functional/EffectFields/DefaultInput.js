import Div from '../../Design/Div';
import Label from '../../Design/forms/Label';
import TextBlock from '../../Design/Text';

const DefaultInput = ({label, textContent}) => {
    const fDefault = Div({classList: ['form--default']});
    fDefault.appendChild(Label({textContent: label}));
    fDefault.appendChild(TextBlock({textContent, classList: ['mb-1']}));
    return fDefault;
}

export default DefaultInput;