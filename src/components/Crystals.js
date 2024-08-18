import ProgressBar from "./ProgressBar";

export default function Crystals() {
	return `
		<div class="crystals">
			<h2>Crystals: <span class="crystals-count">0</span> / 100,000,000</h2>
			${ProgressBar('large')}
		</div>
	`
}