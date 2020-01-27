import { reducer } from '../'

describe('Cricket', () => {
  it('adds amount of runs', () => {
    const actions = [{ type: 'SCORE', amount: 4 }, { type: 'SCORE', amount: 2 }]

    const newState = actions.reduce(reducer, undefined)

    expect(newState.runs).toBe(6)
  })

  it('swaps player when batter gets out', () => {
    const actions = [{ type: 'WICKET' }]

    const newState = actions.reduce(reducer, undefined)

    expect(newState.currentBatter).toEqual(['Milly', 'Ryan'])
  })
})
