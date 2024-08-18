import ActionsPanel from "./ActionsPanel"
import Clock from "./Clock"
import Crystals from "./Crystals"

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
				${ActionsPanel()}
			</div>
		</div>
	`
}