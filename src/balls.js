import { randomRange } from './utils/math'

export const getBallDetails = () => {
  const battingPair = ['Paine, Labuschagne']
  const bowlers = ['Wagner, Southee, Boult']

  const fullBall = {
    batter: 'Paine',
    bowler: 'Wagner',
    runs: Math.floor(Math.random() * 7),
    speed: randomRange(120, 150),
    bowlingDescription: 'good length',
    shotDescription:
      "he leans into a terrific square drive but there's a man in the deep"
  }

  const {
    batter,
    bowler,
    runs,
    speed,
    bowlingDescription,
    shotDescription
  } = fullBall

  return `${bowler} to ${batter}, ${runs} run/s, ${speed}kph, ${bowlingDescription}, ${shotDescription} \n`
}
