import { htmlStructure, header, startSortingBtn } from '../components/display';
import events from './domEvents';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
