const inventory = {
	crystals: 0,
	wood: 0,
	stone: 0,
	food: 0,
	weapons: 0,
	armor: 0,
	tools: 0,
	medicine: 0,
	artifacts: 0,
	coins: 0,
};

export default function Inventory() {
	return `
		<div class="inventory">
			<h2>Inventory</h2>
			<ul></ul>
		</div>
	`
}

export function initInventory() {
	updateInventoryUI();
}

export function updateInventory(item, amount) {
	if (inventory[item] !== undefined) {
		inventory[item] += amount;
		updateInventoryUI();
	}
}

function updateInventoryUI() {
	const inventoryContainer = document.querySelector('.inventory');
	const parent = inventoryContainer.parentElement;
	const ul = inventoryContainer.querySelector('ul');
	ul.innerHTML = '';
	for (const [key, value] of Object.entries(inventory)) {
		if (value === 0) continue;
		const li = document.createElement('li');
		li.textContent = `${key}: ${value}`;
		ul.appendChild(li);
	}
	if (ul.children.length > 0) {
		parent.classList.remove('hide');
	} else {
		parent.classList.add('hide');
	}
}