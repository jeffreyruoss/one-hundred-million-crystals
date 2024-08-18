import { game } from "../lib/game"
import ProgressBar from "./ProgressBar"
import { progressBarStart, progressBarReset } from "./ProgressBar"

const exploreResults = [
	{
		description: 'You find wood.',
		reward: { wood: 1 },
		chance: 0.7
	},
	{
		description: 'You find a crystal.',
		reward: { crystals: 1 },
		chance: 0.1
	},
	{
		description: 'You find stone.',
		reward: { crystals: 0.3 },
		chance: 0.6
	}
]

export default function Explore() {
	return `
		<div class="explore action" data-in-progress="false" data-progress="0">
			<button class="action-button explore-button">
				Explore <span class="button-hotkey">(e)</span>
			</button>
			${ProgressBar('small')}
			<p class="message"></p>
		</div>
	`
}

export function initExplore() {
	document.addEventListener('keydown', (event) => {
		if (event.key === 'e') {
			startExploring()
		}
	})

	const exploreButton = document.querySelector('.explore-button')

	exploreButton.addEventListener('click', (event) => {
		startExploring()
	})
}

function startExploring() {
	if (document.querySelector('.explore').dataset.inProgress === 'true') return
	const duration = 3000
	const button = document.querySelector('.explore-button')
	const action = button.closest('.action')
	const progressBar = action.querySelector('.progress-bar')
	progressBarStart(progressBar, duration);
	action.dataset.inProgress = 'true'
	console.log('Exploring...')
	setTimeout(() => {
		endExploring(progressBar)
	}, duration)
}

function explore() {
	const result = exploreResults.find(result => Math.random() < result.chance)
	if (!result) return
	const message = document.querySelector('.explore .message')
	message.innerText = result.description
	message.classList.add('blink')
	console.log('explore result', result);
}

function endExploring(progressBar) {
	document.querySelector('.explore').dataset.inProgress = 'false'
	console.log('Done exploring!')
	explore()
	progressBarReset(progressBar)
}