import SubActions from '../components/Actions/SubActions.js';
import { openModal, closeModal } from '../components/Modal.js';
import { game } from '../state/game.js';
import { mainKeyEventsData } from '../data/main-key-events-data.js';
import { subActionsData } from '../components/Actions/SubActions.js';
import { createTask } from '../components/Actions/Task.js';

const MAIN_MODE = 'main';
const ESC_KEY = 'Escape';
const M_KEY = 'm';

function returnToMainDashboard() {
	game.hotKeyMode = MAIN_MODE;
	closeModal();
}

function switchToSubMode(key) {
	const action = mainKeyEventsData[MAIN_MODE][key];
	game.hotKeyMode = action;
	openModal(SubActions(action));
}

function handleSubModeKey(key) {
	const subActionData = subActionsData[game.hotKeyMode];
	if (!subActionData) return;

	const subAction = subActionData.find(a => a.hotkey === key);
	if (!subAction) return;

	const destination = document.querySelector(`.${game.hotKeyMode}-tasks-queue`);
	createTask(subAction, destination);
	returnToMainDashboard();
}

export function mainKeyEvents() {
	document.addEventListener('keydown', (e) => {
		const currentMode = game.hotKeyMode;
		const mainKeyMap = mainKeyEventsData[currentMode];

		if ((e.key === M_KEY || e.key === ESC_KEY) && currentMode !== MAIN_MODE) {
			returnToMainDashboard();
		} else if (currentMode === MAIN_MODE && mainKeyMap[e.key]) {
			switchToSubMode(e.key);
		} else {
			handleSubModeKey(e.key);
		}
	});
}