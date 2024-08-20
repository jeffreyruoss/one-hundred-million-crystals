import { inventory } from '../Inventory/inventory-data'
import { craftingList } from './crafting-data'
import ProgressBar from '../ProgressBar'

export default function Craft() {
	const craftableItems = Object.keys(craftingList).filter(canCraft)

	return `
		<div class="craft action" data-in-progress="false" data-progress="0">
			<h2>Craft</h2>
			<button class="action-button craft-button">
				Craft <span class="button-hotkey">(c)</span>
			</button>
			<div class="progress-bar-container">
				${ProgressBar('small')}
				<p class="message"></p>
			</div>
			<ul>
				${craftableItems.map(item => `<li>${item}</li>`).join('')}
			</ul>
		</div>
	`
}

export function initCraft() {
	document.addEventListener('inventoryChange', updateCraftUI)

	document.addEventListener('keydown', (event) => {
		if (event.key === 'c') {
			startCrafting()
		}
	})

	const exploreButton = document.querySelector('.craft-button')

	exploreButton.addEventListener('click', (event) => {
		startCrafting()
	})
}

function canCraft(item) {
	const requirements = craftingList[item].requirements
	for (const [resource, amount] of Object.entries(requirements)) {
		if (inventory[resource].quantity < amount) {
			return false
		}
	}
	craftingList[item].revealed = true
	return true
}

function updateCraftUI() {
	const craft = document.querySelector('.craft')
	const craftPanel = craft.parentElement
	const parent = craftPanel.parentElement
	const ul = craftPanel.querySelector('ul')
	ul.innerHTML = ''
	const craftableItems = Object.keys(craftingList).filter(item => craftingList[item].revealed || canCraft(item))
	for (const item of craftableItems) {
		const li = document.createElement('li')
		li.textContent = item
		ul.appendChild(li)
	}
	if (ul.children.length > 0) {
		parent.classList.remove('hide')
	}
}

function startCrafting() {
	console.log('startCrafting');
}