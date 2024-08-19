import { inventory } from '../lib/inventory';
import { craftingList } from '../lib/crafting-list';

export default function Craft() {
	const craftableItems = Object.keys(craftingList).filter(canCraft);

	return `
		<div class="craft">
			<h2>Craft</h2>
			<ul>
				${craftableItems.map(item => `<li>${item}</li>`).join('')}
			</ul>
		</div>
	`;
}

export function initCraft() {
	document.addEventListener('inventoryChange', updateCraftUI);
}

function canCraft(item) {
	const requirements = craftingList[item];
	for (const [resource, amount] of Object.entries(requirements)) {
		if (inventory[resource] < amount) {
			return false;
		}
	}
	return true;
}

function updateCraftUI() {
	console.log('updateCraftUI');
	const craftContainer = document.querySelector('.craft');
	const ul = craftContainer.querySelector('ul');
	ul.innerHTML = '';
	const craftableItems = Object.keys(craftingList).filter(canCraft);
	for (const item of craftableItems) {
		const li = document.createElement('li');
		li.textContent = item;
		ul.appendChild(li);
	}
}
