import { game } from '../state/game'

export default function Clock() {
	return `
        <div class="clock" data-clock-seconds="0">Clock: <span class="clock-seconds">0</span></div>
    `
}

export function initClock() {
	function incrementClock() {
		game.clock++
		if (game.clock % 60 === 0) {
			updateClock()
		}
	}

	function startClock() {
		setInterval(incrementClock, 1000 / 60)
	}

	function updateClock() {
		const clock = document.querySelector('.clock')
		const clockSeconds = document.querySelector('.clock-seconds')
		const newClock = game.clock / 60
		clock.dataset.clockSeconds = newClock
		clockSeconds.innerText = `${newClock}`
	}

	startClock()
}