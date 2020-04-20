import smoothscroll from 'smoothscroll-polyfill';
import 'whatwg-fetch';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
