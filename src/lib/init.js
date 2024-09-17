import { mainKeyEvents } from './main-key-events'
import Layout from '../components/Layout'
import { initClock } from '../components/Clock'
import { initInventory } from '../components/Inventory/Inventory'
import { initCrystals } from '../components/Crystals'
import { loadTasks } from '../components/Actions/Task'

export default function init() {
	document.querySelector('#app').innerHTML = `
  ${Layout()}
`
	document.addEventListener('DOMContentLoaded', () => {
		initClock()
		initCrystals()
		initInventory()
		mainKeyEvents()
		loadTasks()
	})
}
