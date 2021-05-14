const Header = ({textContent}) => {
    const h = document.createElement('header');
    h.textContent = textContent;
    return h;
}
export default Header;