import Input from './Input';

const RangeSlider = ({value = null, name = '', id='', classList = [], min , max, step}) => {
    const r = Input({type: 'range', value, name, id, classList});
    r.min = min;
    r.max = max;
    r.step = step;
    return r;
}

export default RangeSlider;