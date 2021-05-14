const Button = ({textContent, onClick = null, id = null, type = 'button', style = 'primary'}) => {
    const b = document.createElement('button');
    b.type = type;
    b.textContent = textContent;
    b.id = id;
    b.classList = style
    b.addEventListener('click', () => { onClick(); });
    return b;
}

export default Button;