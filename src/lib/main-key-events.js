import SubActions from '../components/Actions/SubActions.js';
import { createModal, destroyModal } from '../components/Modal.js';
import { game } from './game.js';
import { mainKeyEventsData } from './main-key-events-data.js';
import { subActionsData } from '../components/Actions/SubActions.js';
import { createTask } from '../components/Actions/Task.js';


export function mainKeyEvents() {
	document.addEventListener('keydown', (e) => {
		const currentMode = game.hotKeyMode;
		const mainKeyMap = mainKeyEventsData[currentMode];

		// if not in main mode and 'm' or 'esc' return to main dashboard
		if (e.key === 'm' && game.hotKeyMode !== 'main' || e.key === 'Escape' && game.hotKeyMode !== 'main') {
			game.hotKeyMode = 'main';
			destroyModal();
		}

		// if in main mode and key is in mainKeyMap, change to sub mode and create modal
		else if (game.hotKeyMode === 'main' && mainKeyMap[e.key]) {
			const action = mainKeyMap[e.key];
			game.hotKeyMode = action;
			createModal(SubActions(action));
		}

		// if in sub mode and key is in subActionsData, do something
		else {
			const subActionData = subActionsData[game.hotKeyMode];
			if (subActionData) {
				const subAction = subActionsData[game.hotKeyMode].find(a => a.hotkey === e.key);
				if (subAction) {
					const destination = document.querySelector(`.${game.hotKeyMode}-tasks-queue`);
					createTask(subAction, destination);
				}
			}
		}
	});
}