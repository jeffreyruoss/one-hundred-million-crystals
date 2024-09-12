import { craftItems } from './sub-actions-data/craft-items.js'
import { explorationZones } from './sub-actions-data/exploration-zones.js'
import { quests } from './sub-actions-data/quests.js'
import { actionsData } from './actions-data.js'
import SubAction from './SubAction.js'

const subActionsData = {
	'craft': craftItems,
	'explore': explorationZones,
	'quests': quests
}

export default function SubActions(action) {
	return `
		<div class="sub-actions">
			<p class="subtle">Press <span class="hotkey">m</span> to return to the main dashboard</p>
			<h3>${actionsData.find(a => a.key === action).subActionsTitle}</h3>
			<ul>
				${subActionsData[action].map(SubAction).join('')}
			</ul>
		</div>
	`
}