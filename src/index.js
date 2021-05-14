/**
 * Initial app index
 */

import 'regenerator-runtime/runtime';
import 'firebase/firestore';
import RenderDashboard from './Components/Pages/Dashboard';
import initEventDelegator from './lib/ClickEventDelegator';


const initApp = () => {
  initEventDelegator();
  RenderDashboard();
};

window.addEventListener('load', initApp);
