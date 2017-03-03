/* global describe, it, beforeEach */
import { h, render, rerender, Component } from 'preact'; /** @jsx h */
import { expect } from 'chai';
import undom from 'undom';

import App from '../../src/components/app';

describe('App', () => {

	describe('routing', () => {

		beforeEach(() => {
			Object.assign(global, undom().defaultView);
		});

		it('should render the homepage', () => {
			let element = render(<App />, document.body);
			expect(element._component).to.contain('Home');
			
		});

	});

});
