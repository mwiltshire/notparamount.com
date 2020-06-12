import smoothscroll from 'smoothscroll-polyfill';
import 'whatwg-fetch';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};

export const onRouteUpdate = ({ location }) => {
  if (location && location.hash) {
    const element = document.querySelector(location.hash);
    const top = element.offsetTop + -48;
    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth'
    });
  }
};
