import firestorage from '../../lib/Firestore';
import App from '../App';
import Header from '../Blocks/Header';
import Main from '../Blocks/Main';
import Button from '../Design/Button';
import SoundForm from '../Functional/SoundForm';
import Portal from '../General/Portal';

const openPortal = () => {
    const portal = Portal();
    portal.appendChild(SoundForm());
}

const RenderDashboard = () => {
    App.resetBody();
    App.addComponent(Header({textContent: 'IOTalks'}));
    const main = Main();
    main.appendChild(Button({textContent: 'Add Sound', onClick: openPortal, style: 'primary abs-down-center'}))
    App.addComponent(main)
}

export default RenderDashboard;