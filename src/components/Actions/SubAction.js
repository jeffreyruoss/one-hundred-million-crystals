export default function SubAction(subAction) {
	return `
		<li class="sub-action	sub-action-${subAction.key}">
			<div class="sub-action-title-row">
				<span class="hotkey">${subAction.hotkey}</span>
				<h4>${subAction.title}</h4>
			</div>
			<p>${subAction.description}</p>
		</li>
	`
}