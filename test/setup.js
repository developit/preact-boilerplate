import lolex from 'lolex';
import chai from 'chai';
import assertJsx, { options } from 'preact-jsx-chai';
// when checking VDOM assertions, don't compare functions,
// just nodes and attributes
options.functions = false;
// activate the JSX assertion extension
chai.use(assertJsx);

export const createClock = () => {
	const fns = [
		'Date', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'
	];
	const clock = lolex.install(document.defaultView);
	// save original JSDOM functions
	const oldFns = new Map(fns.map(name => [name, global[name]]));
	// replace with clock
	fns.forEach(name => global[name] = clock[name]);
	const uninstall = clock.uninstall;
	clock.uninstall = () => {
		uninstall.call(clock);
		fns.forEach(name => global[name] = oldFns.get(name));
	};
	return clock;
};
