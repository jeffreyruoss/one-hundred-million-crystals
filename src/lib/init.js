import { mainKeyEvents } from './main-key-events'
import Layout from '../components/Layout'
import { initClock } from '../components/Clock'
import { initExplore } from '../components/Explore/Explore'
import { initInventory } from '../components/Inventory/Inventory'
import { initCraft } from '../components/Craft/Craft'
import { initCrystals } from '../components/Crystals'

export default function init() {
	document.querySelector('#app').innerHTML = `
  ${Layout()}
`
	document.addEventListener('DOMContentLoaded', () => {
		initClock()
		initCrystals()
		initInventory()
		// initExplore()
		// initCraft()
		mainKeyEvents()
	})
}
