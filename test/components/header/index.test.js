/* global describe, it */
import { h } from 'preact'; /* @jsx h */
import { expect } from 'chai';

import Header from '../../../src/components/header';

const normalize = str => str.replace(/\s+/g, ' ');

describe('components/Header', () => {

	it('should show the correct navigation links', () => {
		const header = <Header/>;
		expect(header).to.contain(<a href='/'>Home</a>);
		expect(header).to.contain(<a href='/profile'>Me</a>);
		expect(header).to.contain(<a href='/profile/john'>John</a>);
	});

});
