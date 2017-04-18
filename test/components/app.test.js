import { h, render } from 'preact';
import { route } from 'preact-router';
import { expect } from 'chai';

import App from '../../src/components/app';

describe('App', () => {
	let scratch;

	beforeAll( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	afterAll( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});


	describe('routing', () => {
		it('should render the homepage', () => {
			render(<App />, scratch);

			expect(scratch.innerHTML).to.contain('Home');
		});

		it('should render /profile', async () => {
			render(<App />, scratch);
			route('/profile');

			await sleep(1);

			expect(scratch.innerHTML).to.contain('Profile: me');
		});

		it('should render /profile/:user', async () => {
			render(<App />, scratch);
			route('/profile/john');

			await sleep(1);

			expect(scratch.innerHTML).to.contain('Profile: john');
		});
	});
});
