export const isString = (s) => typeof s === 'string';

export const isEvent = (event) => (event.startsWith('on') ? event.toLowerCase() : `on${event}`) in window;
