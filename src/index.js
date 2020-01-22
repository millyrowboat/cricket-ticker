import { getBallDetails } from './balls'

const incremenet = {
  type: 'INCRECEMENT'
}

const decrement = {
  type: 'DECREMENT'
}

const initialState = {
  score: 0,
  currentBatsmen: ['SteveO', 'Milly'],
  currentBowler: 'Warne'
}

const actions = [incremenet, decrement, decrement, incremenet, incremenet]
export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCRECEMENT':
      return {
        ...state,
        score: state.score + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        score: state.score - 1
      }
    default:
      return {
        ...state
      }
  }
}
const newState = actions.reduce(reducer, initialState)

console.log(newState)
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
