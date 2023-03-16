
import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Lines = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = `${(good / all) * 100} %`

  return all > 0 ? (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Lines text="Good" value={good} />
          <Lines text="Neutral" value={neutral} />
          <Lines text="Bad" value={bad} />
          <Lines text="All" value={all} />
          <Lines text="Average" value={average} />
          <Lines text="Positive" value={positive} />
        </tbody>
      </table>
    </>
  ) : (
    <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state, setState) => () => setState(state + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={increment(good, setGood)} text="good" />
      <Button onClick={increment(neutral, setNeutral)} text="neutral" />
      <Button onClick={increment(bad, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App