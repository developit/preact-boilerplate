import Emitter from 'wildemitter';

export const pubsub = new Emitter();
export let emit = ::pubsub.emit;
export let on = ::pubsub.on;
export let off = ::pubsub.off;

const CONSOLE_IGNORE = ['scroll', 'resize', 'route'];

// log events to console
on('*', (type, ...args) => CONSOLE_IGNORE.indexOf(type)<0 && console.log(type, ...args) );
