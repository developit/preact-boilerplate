import { h } from 'preact';
import style from './style.less';

export default () => {
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
		</div>
	);
};
