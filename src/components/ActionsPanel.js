import Explore from './Explore.js';

export default function ActionsPanel() {
	return `
		<div class="actionsPanel">
			<h2>Actions</h2>
			${Explore()}
		</div>
	`
}