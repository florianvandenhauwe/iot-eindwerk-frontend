const Label = ({textContent = '', htmlFor = ''}) => {
    const l = document.createElement('label');
    l.textContent = textContent;
    l.htmlFor = htmlFor;
    return l;
}
export default Label;