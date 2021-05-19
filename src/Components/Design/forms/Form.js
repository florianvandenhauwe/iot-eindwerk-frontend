const Form = ({classList = []}) => {
    const f = document.createElement('form');
    f.classList.add(...classList);
    return f;
}

export default Form;