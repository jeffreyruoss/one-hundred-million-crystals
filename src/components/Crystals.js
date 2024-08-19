import ProgressBar from "./ProgressBar"

export default function Crystals() {
	document.addEventListener('inventoryChange', updateCrystalCount)

	return `
		<div class="crystals">
			<h2>Crystals: <span class="crystals-count">0</span> / 100,000,000</h2>
			${ProgressBar('large')}
		</div>
    `
}

function updateCrystalCount(event) {
	const crystalsCount = event.detail.crystals
	const crystalsCountElement = document.querySelector('.crystals-count')
	crystalsCountElement.textContent = crystalsCount
}