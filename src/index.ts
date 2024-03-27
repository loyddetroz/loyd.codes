import {tech, experience} from './data';
import initExp from './experience';
import {initialize, resize} from './particle';
import initScroll from './scroll';
import initTechList from './tech-list';

window.addEventListener('load', initialize);
window.addEventListener('resize', resize);

window.addEventListener('load', () => {
  console.log(location.href);
  document
    .querySelector('#og-image')
    ?.setAttribute('content', `${location.href}assets/og-image.png`);
  initScroll();
  initTechList(tech);
  initExp(experience);
});
