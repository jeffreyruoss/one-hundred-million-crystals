import { inventory } from '../lib/inventory.js'

export default function Inventory() {
	return `
        <div class="inventory">
                <h2>Inventory</h2>
                <ul></ul>
        </div>
    `
}

export function initInventory() {
	updateInventoryUI()
}

export function updateInventory(item, amount) {
	if (inventory[item] !== undefined) {
		inventory[item].quantity += amount
		inventory[item].revealed = true
		updateInventoryUI()
		dispatchInventoryChangeEvent()
	}
}

/**
 * Dev function to add items to the inventory
 * (use negative values to remove items)
 */
window.devUpdateInventory = function (item, amount) {
	updateInventory(item, amount)
	console.log(`Updated ${item} by ${amount}. New quantity: ${inventory[item].quantity}`)
}

function updateInventoryUI() {
	const inventoryContainer = document.querySelector('.inventory')
	const parent = inventoryContainer.parentElement
	const ul = inventoryContainer.querySelector('ul')
	ul.innerHTML = ''
	for (const [key, value] of Object.entries(inventory)) {
		if (!value.revealed) continue
		const li = document.createElement('li')
		li.textContent = `${key}: ${value.quantity}`
		ul.appendChild(li)
	}
	if (ul.children.length > 0) {
		parent.classList.remove('hide')
	}
}

function dispatchInventoryChangeEvent() {
	const event = new CustomEvent('inventoryChange', { detail: inventory })
	document.dispatchEvent(event)
}