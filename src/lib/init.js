import Wrap from './../components/Wrap'
import { initClock } from '../components/Clock'
import { initExplore } from '../components/Explore/Explore'
import { initInventory } from '../components/Inventory/Inventory'
import { initCraft } from '../components/Craft/Craft'
import { initCrystals } from '../components/Crystals'

export default function init() {
	document.querySelector('#app').innerHTML = `
  ${Wrap()}
`
	document.addEventListener('DOMContentLoaded', () => {
		initClock()
		initCrystals()
		initInventory()
		initExplore()
		initCraft()
	})
}
