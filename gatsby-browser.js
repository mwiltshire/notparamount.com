import smoothscroll from 'smoothscroll-polyfill';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
