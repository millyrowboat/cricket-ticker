import { reducer } from '../'

describe('Game', () => {
  it('does a thing', () => {
    const actions = [{ type: 'INCRECEMENT' }]

    const newState = actions.reduce(reducer)

    const expectedState = {
      score: 2,
      currentBatsmen: ['SteveO', 'Milly'],
      currentBowler: 'Warne'
    }

    expect(expectedState.score).toEqual(2)
  })
})
