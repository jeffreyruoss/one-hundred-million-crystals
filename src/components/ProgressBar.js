export default function ProgressBar(size) {
	let sizeClass = ''
	if (size === 'large') {
		sizeClass = 'progress-bar-large'
	} else if (size === 'small') {
		sizeClass = 'progress-bar-small'
	}

	return `
		<div class="progress-bar ${sizeClass}" data-progress="0">
			<div class="progress-bar-fill"></div>
		</div>
	`
}

export function progressBarStart(element, duration) {
	const progressBarFill = element.querySelector('.progress-bar-fill')
	progressBarFill.style.transition = `width ${duration}ms linear`
	progressBarFill.style.width = '100%'
}

export function progressBarReset(element) {
	const progressBarFill = element.querySelector('.progress-bar-fill')
	progressBarFill.style.transition = 'none'
	progressBarFill.style.width = '0%'
}