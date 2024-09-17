import ProgressBar, { progressBarStart } from "../ProgressBar";
import { tasks } from "../../state/tasks";
import { explorationZones } from "../../data/sub-actions-data/exploration-zones";
import { craftItems } from "../../data/sub-actions-data/craft-items";
import { quests } from "../../data/sub-actions-data/quests";

export const subActionsData = {
	'explore': explorationZones,
	'craft': craftItems,
	'quests': quests
}


export default function Task(subAction) {
	return `
		<li class="task">
			${ProgressBar(subAction.title)}
		</li>
	`
}

export function createTask(subAction, destination) {
	const taskHTML = Task(subAction);
	const tempContainer = document.createElement('div');
	tempContainer.innerHTML = taskHTML;
	const taskElement = tempContainer.firstElementChild;
	taskElement.classList.add('blink');
	taskElement.addEventListener('animationend', () => {
		taskElement.classList.remove('blink');
	});

	destination.appendChild(taskElement);
	const progressBar = taskElement.querySelector('.progress-bar');
	progressBarStart(progressBar, 1000);
}

export function loadTasks() {
	tasks.forEach(task => {
		const taskKey = task.key;
		const taskContainer = document.querySelector(`.${taskKey}-tasks-queue`);
		task.tasks.forEach(task => {
			const subActionKey = task.key;
			const subAction = subActionsData[taskKey].find(subAction => subAction.key === subActionKey);
			createTask(subAction, taskContainer);
		});
	});
}