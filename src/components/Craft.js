import { inventory } from '../lib/inventory'
import { craftingList } from '../lib/crafting-list'
import ProgressBar from './ProgressBar'

export default function Craft() {
	const craftableItems = Object.keys(craftingList).filter(canCraft)

	return `
		<div class="craftPanel">
			<h2>Craft</h2>
			<div class="craft action" data-in-progress="false" data-progress="0">
				<button class="action-button craft-button">
					Craft <span class="button-hotkey">(c)</span>
				</button>
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
	const craftContainer = document.querySelector('.craft')
	const parent = craftContainer.parentElement
	const ul = craftContainer.querySelector('ul')
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