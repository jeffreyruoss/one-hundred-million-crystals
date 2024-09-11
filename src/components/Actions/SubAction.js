export default function SubAction(subAction) {
	return `
		<li class="sub-action	sub-action-${subAction.key}">
			<h3>${subAction.title}</h3>
			<p>${subAction.description}</p>
		</li>
	`
}