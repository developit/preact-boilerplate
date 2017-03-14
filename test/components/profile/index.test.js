/* global describe, it */
import { h, render } from 'preact'; /* @jsx h */
import { expect } from 'chai';
import { createClock } from '../../setup';

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
		// with time, we need to create a clock and mount the component
		// into the DOM
		const clock = createClock();

		// render and mount the component
		let component = null;
		render(<Profile ref={ref => component = ref} user="test"/>, scratch);
		expect(component.state.time).to.equal(new Date(clock.now).toLocaleString());
		
		// pass time for 2 seconds
		clock.tick(2000);

		// check if the state is updated with the new time
		expect(component.state.time).to.equal(new Date(clock.now).toLocaleString());

		// clean up
		clock.uninstall();
	});

});
