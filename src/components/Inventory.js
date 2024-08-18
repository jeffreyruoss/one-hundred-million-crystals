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

export let inventoryProxy;

export default function Inventory() {
	return `
        <div class="inventory">
            <h2>Inventory</h2>
            <ul></ul>
        </div>
    `
}

export function initInventory() {
	inventoryProxy = new Proxy(inventory, {
		set(target, property, value) {
			target[property] = value;
			updateInventory();
			return true;
		}
	});
	updateInventory();
}

function updateInventory() {
	const ul = document.querySelector('.inventory ul');
	ul.innerHTML = '';
	for (const [key, value] of Object.entries(inventoryProxy)) {
		const li = document.createElement('li');
		li.textContent = `${key}: ${value}`;
		ul.appendChild(li);
	}
}