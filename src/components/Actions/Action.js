import SubActions from "./SubActions";

export default function Action(action) {
	return `
		<li class="action action-${action.key}">
			<div class="container">
				<h2>${action.title}</h2>
				<p>${action.description}</p>
			</div>
		</li>
	`
}