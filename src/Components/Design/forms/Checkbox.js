import Input from './Input';

const Checkbox = ({value = '', name = '', checked = false, id = ''}) => {
    const c = Input({type: 'checkbox', value, name, id});
    c.checked = checked;
    return c;
}

export default Checkbox;