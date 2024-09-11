import { craftItems } from './sub-actions-data/craft-items.js'
import { explorationZones } from './sub-actions-data/exploration-zones.js'
import { quests } from './sub-actions-data/quests.js'
import SubAction from './SubAction.js'

const subActionsData = {
	'craft': craftItems,
	'explore': explorationZones,
	'quests': quests
}

export default function SubActions(action) {
	console.log('action:', action);
	console.log(subActionsData[action]);


	return `
		<div class="sub-actions">
			<ul>
				${subActionsData[action].map(SubAction).join('')}
			</ul>
		</div>
	`
}