export default function Modal() {
	return `
		<dialog id="modal">
			<div class="container">
			</div>
		</dialog>
	`
}

export function openModal(content) {
	const modal = document.getElementById('modal');
	const container = modal.querySelector('.container');
	container.innerHTML = content;
	document.getElementById('modal').showModal();
}

export function closeModal() {
	document.getElementById('modal').close();
	document.getElementById('modal').querySelector('.container').innerHTML = '';

}