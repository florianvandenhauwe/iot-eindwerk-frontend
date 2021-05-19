import Elements from '../../lib/ElementFunctions';
import SoundData from '../../lib/SoundData';
import Div from '../Design/Div';
import Title from '../Design/Title';
import BoolCheckBox from './EffectFields/BoolCheckBox';
import DefaultInput from './EffectFields/DefaultInput';
import FormSlider from './EffectFields/FormSlider';

const handleInput = ({obj, name, value}) => {
    const pythonReadyName = Elements.deleteVarNumber(name);
        SoundData.data[obj] = {
            ...SoundData.data[obj],
            [pythonReadyName]: value,
        }
}

const RenderInput = ({
    key,
    value,
    obj = null
}) => {
    const {
        type,
        min = '',
        max = '',
        step = '',
        standard = '',
        unit = ''
    } = value;
    switch (type) {
        case 'range':
            return FormSlider({
                obj,
                label: Elements.humanizeFireStoreVar(key),
                name: key,
                min,
                max,
                step,
                value: standard,
                unit,
                onInput: handleInput,
            });
        case 'bool':
            return BoolCheckBox({
                obj,
                label: Elements.humanizeFireStoreVar(key),
                name: key,
                onInput: handleInput,
            });
        default:
            return DefaultInput({
                obj,
                label: Elements.humanizeFireStoreVar(key),
                textContent: standard
            });
    }

}

const renderEffectForm = (doc) => {

    const fSelect = Div({
        classList: ['form--select']
    });
    fSelect.appendChild(Title({
        textContent: Elements.toUpper(doc.id),
        size: 2
    }));

    for (const [key, value] of Object.entries(doc.data())) {
        fSelect.appendChild(RenderInput({
            key,
            value,
            obj: doc.id
        }));
    }

    return fSelect;
}

export default renderEffectForm;