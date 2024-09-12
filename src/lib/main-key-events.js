import SubActions from '../components/Actions/SubActions.js';
import { createModal, destroyModal } from '../components/Modal.js';
import { game } from './game.js';
import { mainKeyEventsData } from './main-key-events-data.js';

export function mainKeyEvents() {
	document.addEventListener('keydown', (e) => {
		const currentMode = game.hotKeyMode;
		const keyMap = mainKeyEventsData[currentMode];

		if (e.key === 'm' && game.hotKeyMode !== 'main' || e.key === 'Escape' && game.hotKeyMode !== 'main') {
			game.hotKeyMode = 'main';

			destroyModal();

		} else if (keyMap && keyMap[e.key]) {
			const action = keyMap[e.key];
			game.hotKeyMode = action;
			createModal(SubActions(action));
		}
	});
}