const Input = ({type = 'text', value = null, placeholder = '', name = '', id='', classList = []}) => {
    const i = document.createElement('input');
    i.type = type;
    i.value = value;
    i.placeholder = placeholder;
    i.name = name;
    i.id = id;
    i.classList.add(...classList);
    return i;
}

export default Input;