import Crystals from "./Crystals"
import Clock from "./Clock"
import Inventory from "./Inventory"
import ActionsPanel from "./ActionsPanel"
import Craft from "./Craft"

export default function Wrap() {
	return `
		<div class="wrap">
			<div class="header">
				<h1>100 Million Crystals Game</h1>
				${Clock()}
			</div>
			<div class="container">
				${Crystals()}
			</div>
			<div class="container hide">
				${Inventory()}
			</div>
			<div class="container">
				${ActionsPanel()}
			</div>
			<div class="container">
				${Craft()}
			</div>
		</div>
	`
}