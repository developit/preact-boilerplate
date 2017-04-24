import { h, render } from 'preact';
import { expect } from 'chai';

import Profile from '../../../src/components/profile';

describe('components/Profile', () => {

	let scratch = null;

	beforeEach(() => {
		scratch = document.createElement('div');
	});

	it('should show the name of the user passed to it', () => {
		const profile = <Profile user="Martha"/>;
		expect(profile).to.contain(<h1>Profile: Martha</h1>);
	});

	it('should show the passage of time', () => {
		// in order to test whether the component updates state
		// with time, we need to create mount the component and
		// pass time; we'll use Jest's fake timers for this
		jest.useFakeTimers();

		// render and mount the component
		let component = null;
		render(<Profile ref={ref => component = ref} user="test"/>, scratch);
		expect(component.state.time).to.equal(new Date().toLocaleString());

		// pass time for 2 seconds
		jest.runTimersToTime(2000);

		// check if the state is updated with the new time
		expect(component.state.time).to.equal(new Date().toLocaleString());

		// restore the native timers
		jest.useRealTimers();
	});

});
