import Wrap from './../components/Wrap'
import { initClock } from '../components/Clock'
import { initExplore } from '../components/Explore'
import { initInventory } from '../components/Inventory'
import { initCraft } from '../components/Craft'

export default function init() {
	document.querySelector('#app').innerHTML = `
  ${Wrap()}
`
	document.addEventListener('DOMContentLoaded', () => {
		initClock()
		initInventory()
		initExplore()
		initCraft()
	})
}
