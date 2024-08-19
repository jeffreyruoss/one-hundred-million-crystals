import ProgressBar from "./ProgressBar"
import { inventory } from '../lib/inventory'

export default function Crystals() {
	return `
		<div class="crystals">
			<h2>Crystals: <span class="crystals-count">0</span> / 100,000,000</h2>
			${ProgressBar('large')}
		</div>
	`
}

export function initCrystals() {
	updateCrystalCount()
	document.addEventListener('inventoryChange', updateCrystalCount)
}

function updateCrystalCount() {
	const crystalsCountElement = document.querySelector('.crystals-count')
	crystalsCountElement.textContent = inventory.crystals.quantity
}