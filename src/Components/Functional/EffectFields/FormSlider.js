import Div from '../../Design/Div';
import Label from '../../Design/forms/Label';
import RangeSlider from '../../Design/forms/RangeSlider';
import TextBlock from '../../Design/Text';

const FormSlider = ({obj, label = '', name, min, max, step, value, unit = '', onInput}) => {
    const fSlider = Div({classList: ['form--slider']});
    fSlider.appendChild(Label({textContent: label, htmlFor: name}));
    const rangeSlider = fSlider.appendChild(RangeSlider({value, name, id: name, classList: ['fill-h'], min, max, step}));
    const sliderValue = fSlider.appendChild(TextBlock({textContent: `${value} ${unit}`, classList: ['mb-1']}));
    rangeSlider.oninput = () => {
        const { value } = rangeSlider;

        sliderValue.innerHTML = `${value} ${unit}`;

        onInput({obj, name, value});
    };
    return fSlider;
}

export default FormSlider;