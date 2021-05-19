import App from '../App';
import Header from '../Blocks/Header';
import Main from '../Blocks/Main';
import SoundList from '../Blocks/SoundList';
import Button from '../Design/Button';
import NewSound from '../Functional/NewSound';
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

    main.appendChild(NewSound());

    main.appendChild(Button({textContent: 'Add Sound', onClick: openPortal, classList: ['center-h']}));

    main.appendChild(SoundList());

    App.addComponent(main)
}

export default RenderDashboard;