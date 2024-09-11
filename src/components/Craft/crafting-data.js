export const craftingList = {
	axe: {
		materials: { wood: 1, stone: 1 },
		hotkey: 'a',
		revealed: false
	},
	pickaxe: {
		materials: { wood: 1, stone: 1 },
		hotkey: 'p',
		revealed: false
	},
	hammer: {
		materials: { wood: 1, stone: 1 },
		hotkey: 'h',
		revealed: false
	},
	lumbermill: {
		requirements: { workshop: 1, hammer: 1 },
		materials: { wood: 5, stone: 3 },
		hotkey: 'l',
		revealed: false
	},
	workshop: {
		requirements: { hammer: 1 },
		materials: { wood: 5, stone: 3 },
		hotkey: 'w',
		revealed: false
	},
	quarry: {
		requirements: { workshop: 1, hammer: 1 },
		materials: { wood: 5, stone: 3 },
		hotkey: 'q',
		revealed: false
	},
	mine: {
		requirements: { workshop: 1, pickaxe: 1 },
		materials: { wood: 5, stone: 3 },
		hotkey: 'm',
		revealed: false
	},
}