import ProgressBar, { progressBarStart } from "../ProgressBar";

export default function Task(subAction) {
	return `
		<li class="task">
			${ProgressBar('small', subAction.title)}
		</li>
	`
}

export function createTask(subAction, destination) {
	console.log('create task');
	const taskHTML = Task(subAction);
	const tempContainer = document.createElement('div');
	tempContainer.innerHTML = taskHTML;
	const taskElement = tempContainer.firstElementChild;
	taskElement.classList.add('blink');
	taskElement.addEventListener('animationend', () => {
		taskElement.classList.remove('blink');
	});


	console.log(taskElement.querySelector('.progress-bar'));
	destination.appendChild(taskElement);
	const progressBar = taskElement.querySelector('.progress-bar');
	progressBarStart(progressBar, 1000);
}