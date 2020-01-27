import { initialState } from '../initialState'
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SCORE':
      return {
        ...state,
        runs: state.runs + action.amount
      }
    case 'WICKET':
      const newBatter = [...state.currentBatter].slice(1)
      const newBattingPair = newBatter.concat(state.batters[0])
      return {
        ...state,
        currentBatter: newBattingPair,
        batters: [...state.batters].slice(1)
      }
    default:
      return {
        ...state
      }
  }
}
