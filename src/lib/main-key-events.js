import SubActions from '../components/Actions/SubActions.js';
import { createModal, destroyModal } from '../components/Modal.js';
import { game } from './game.js';
import { mainKeyEventsData } from './main-key-events-data.js';

export function mainKeyEvents() {
	console.log('game.keyMode:', game.keyMode);

	document.addEventListener('keydown', (e) => {
		const currentMode = game.keyMode;
		const keyMap = mainKeyEventsData[currentMode];

		console.log(e.key);

		if (e.key === 'm' && game.keyMode !== 'main' || e.key === 'Escape' && game.keyMode !== 'main') {
			game.keyMode = 'main';

			destroyModal();

		} else if (keyMap && keyMap[e.key]) {
			const action = keyMap[e.key];
			game.keyMode = action;
			console.log(`key pressed - ${action}`);
			createModal(SubActions(action));
		}

		console.log('game.keyMode:', game.keyMode);
	});
}