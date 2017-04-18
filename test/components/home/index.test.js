/* global describe, it */
import { h } from 'preact'; /** @jsx h */
import { expect } from 'chai';

import Home from '../../../src/components/home';

describe('components/home', () => {
	it('should show the home text', () => {
		const home = <Home/>;
		expect(home).to.contain(<h1>Home</h1>);
		expect(home).to.contain('Home component');
	});
});
