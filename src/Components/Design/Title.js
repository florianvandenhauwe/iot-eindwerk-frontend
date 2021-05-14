const Title = ({size = 1, textContent = ''}) => {
    const t = document.createElement(`h${size}`);
    t.textContent = textContent;
    return t;
}

export default Title;