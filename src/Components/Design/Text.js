const TextBlock = ({textContent = '', classList = []}) => {
    const p = document.createElement('p');
    p.textContent = textContent;
    p.classList.add(...classList);
    return p;
}

export default TextBlock;