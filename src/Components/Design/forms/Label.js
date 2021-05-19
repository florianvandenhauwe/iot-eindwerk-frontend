const Label = ({textContent = '', htmlFor = '', classList = []}) => {
    const l = document.createElement('label');
    l.classList.add(...classList);
    l.textContent = textContent;
    l.htmlFor = htmlFor;
    return l;
}
export default Label;