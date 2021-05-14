/**
 * Click event delegator
 */

import App from '../Components/App';
import Elements from './ElementFunctions';

class ClickEventDelegator {
  constructor() {
    this.events = new Map();
    document.addEventListener('click', this.handleEvent.bind(this));
  }

  addCallbackFor(match, callback) {
    this.events.set(match, callback);
  }

  handleEvent(event) {
    this.events.forEach((value, key) => {
      if (event.target.matches(key)) {
        this.events.get(key)(event);
      }
    });
  }
}

const initEventDelegator = () => {
  const eventDelegator = new ClickEventDelegator();
  /**
   * Visual functions
   */
  // clear portal
  eventDelegator.addCallbackFor(
    '.clearPortal',
    () => Elements.clearContainer(App.portal),
  );
};

export default initEventDelegator;
