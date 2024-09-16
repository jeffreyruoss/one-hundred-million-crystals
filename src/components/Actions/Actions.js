import Action from "./Action"
import { actionsData } from "../../data/actions-data"

export default function Actions() {
	return `
		<div class="actions">
			<ul>
				${actionsData.map(action => Action(action)).join('')}
			</ul>
		</div>
		`
}