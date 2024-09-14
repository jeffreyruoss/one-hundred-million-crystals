export default function Task(subAction) {
	return `
		<li class="task">
			${subAction.title}
		</li>
	`
}

export function createTask(subAction, destination) {
	const task = Task(subAction);
	destination.insertAdjacentHTML('beforeend', task);
}