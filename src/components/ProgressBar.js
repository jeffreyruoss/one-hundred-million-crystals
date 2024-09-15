export default function ProgressBar(size, content) {
	let sizeClass = ''
	if (size === 'large') {
		sizeClass = 'progress-bar-large'
	} else if (size === 'small') {
		sizeClass = 'progress-bar-small'
	}

	return `
		<div class="progress-bar ${sizeClass}" data-progress="0">
			<div class="progress-bar-fill"></div>
			<span class="progress-bar-content">${content}</span>
		</div>
	`
}

export function progressBarStart(progressBar, duration) {
	const progressBarFill = progressBar.querySelector('.progress-bar-fill');
	progressBarFill.style.transition = 'none';
	progressBarFill.style.width = '0%';
	progressBarFill.offsetWidth;
	progressBarFill.style.transition = `width ${duration}ms linear`;
	progressBarFill.style.width = '100%';
	setTimeout(() => {
		progressBarComplete(progressBar);
	}, duration);
}

export function progressBarComplete(progressBar) {
	const progressBarFill = progressBar.querySelector('.progress-bar-fill');
	const progressBarContent = progressBar.querySelector('.progress-bar-content');
	progressBarFill.classList.remove('blink');
	progressBarFill.classList.add('blink', 'progress-bar-fill-complete');
	progressBarContent.textContent += ' (Complete)';
}