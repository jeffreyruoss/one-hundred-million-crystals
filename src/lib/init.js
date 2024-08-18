import { initClock } from '../components/Clock'
import { initExplore } from '../components/Explore'
import Wrap from './../components/Wrap'

export default function init() {
	document.querySelector('#app').innerHTML = `
  ${Wrap()}
`
	document.addEventListener('DOMContentLoaded', () => {
		initClock()
		initExplore()
	})
}
