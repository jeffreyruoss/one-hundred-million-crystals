import SubActions from "./SubActions"

export default function Action(action) {
	return `
		<li class="action action-${action.key}">
			<div class="container">
				<div class="action-title-row">
					<span class="hotkey">${action.hotkey}</span>
					<h2>${action.title}</h2>
				</div>
				<p>${action.description}</p>
				<ul class="${action.key}-tasks-queue"></ul>
			</div>
		</li>
	`
}