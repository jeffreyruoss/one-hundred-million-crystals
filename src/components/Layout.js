import Crystals from "./Crystals"
import Clock from "./Clock"
import Inventory from "./Inventory/Inventory"
import Actions from "./Actions/Actions"

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
			${Actions()}
		</div>
	`
}