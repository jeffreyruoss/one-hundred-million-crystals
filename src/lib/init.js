import Wrap from './../components/Wrap'
import { initClock } from '../components/Clock'
import { initExplore } from '../components/Explore'
import { initInventory } from '../components/Inventory'
import { initCraft } from '../components/Craft'
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
