const Options = ({value, innerText}) => {
    const o = document.createElement('option');
    o.value = value;
    o.innerText = innerText;
    return o;
}

const Select = ({name = '', options = {}}) => {
    const s = document.createElement('select');
    s.name = name;
    for( const [key, value] of Object.entries(options)) {
        s.appendChild(Options({value, innerText: key}))
    }
    return s;
}

export default Select;