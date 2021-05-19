import App from '../App';
import Div from '../Design/Div';

const Portal = () => {
    const bg = Div({classList: ['portal__overlay', 'clearPortal']});
    const p = Div({classList: ['portal__inner']});
    bg.appendChild(p);
    App.portal.appendChild(bg);
    return p;
}

export default Portal