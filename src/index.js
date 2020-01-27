import { getBallDetails } from './balls'
import { initialState } from '../initialState'
import { reducer } from './reducers'

const team1 = ['SteveO', 'Milly']
const team2 = ['Warne', 'Lee']

const node = document.querySelector('.shots')

const constructText = details => {
  const p = document.createElement('p')
  p.appendChild(document.createTextNode(details))
  return p
}

for (let i = 0; i < 6; i++) {
  const details = getBallDetails()
  setTimeout(() => node.appendChild(constructText(details)), i * 1000)
}
