const Div = ({classList = [], id = ''}) => {
    const d = document.createElement('div');
    d.classList.add(...classList);
    d.id = id;
    return d;
}

export default Div;