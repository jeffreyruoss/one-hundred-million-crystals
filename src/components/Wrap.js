import ActionsPanel from "./ActionsPanel"
import Crystals from "./Crystals"
import Clock from "./Clock"
import Inventory from "./Inventory"

export default function Wrap() {
	return `
		<div class="wrap">
			<h1>100 Million Crystals Game</h1>
			<div class="container">
				${Crystals()}
			</div>
			<div class="container">
				${Clock()}
			</div>
			<div class="container">
				${Inventory()}
			</div>
			<div class="container">
				${ActionsPanel()}
			</div>
		</div>
	`
}