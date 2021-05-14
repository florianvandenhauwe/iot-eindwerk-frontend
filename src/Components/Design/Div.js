const Div = ({classList = []}) => {
    const d = document.createElement('div');
    d.classList.add(...classList);
    return d;
}

export default Div;