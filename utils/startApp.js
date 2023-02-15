import { htmlStructure, header, startSortingBtn, events } from '../components/display';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
