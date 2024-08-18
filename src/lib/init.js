import { initClock } from '../components/Clock'
import { initExplore } from '../components/Explore'
import { initInventory } from '../components/Inventory'
import Wrap from './../components/Wrap'

export default function init() {
	document.querySelector('#app').innerHTML = `
  ${Wrap()}
`
	document.addEventListener('DOMContentLoaded', () => {
		initClock()
		initInventory()
		initExplore()
	})
}
