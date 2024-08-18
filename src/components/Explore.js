import { game } from "../lib/game"
import ProgressBar from "./ProgressBar"
import { progressBarStart, progressBarReset } from "./ProgressBar"
import { inventoryProxy } from "./Inventory"

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
		reward: { stone: 1 },
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

	for (const [key, value] of Object.entries(result.reward)) {
		inventoryProxy[key] += value;
	}
}

function endExploring(progressBar) {
	document.querySelector('.explore').dataset.inProgress = 'false'
	explore()
	progressBarReset(progressBar)
}