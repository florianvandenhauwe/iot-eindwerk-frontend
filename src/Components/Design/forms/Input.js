const Input = ({type = 'text', value = '', placeholder = '', name = '', id=''}) => {
    const i = document.createElement('input');
    i.type = type;
    i.value = value;
    i.placeholder = placeholder;
    i.name = name;
    i.id = id;
    return i;
}

export default Input;