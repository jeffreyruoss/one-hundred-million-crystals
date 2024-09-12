function Modal(content) {
	return `
		<dialog id="modal">
			<div class="container">
				${content}
			</div>
		</dialog>
	`
}

export function createModal(content) {
	document.body.innerHTML += Modal(content);
	document.getElementById('modal').showModal();
}

export function destroyModal() {
	const modal = document.getElementById('modal');
	modal.remove();
}