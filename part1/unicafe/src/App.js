// // import logo from './logo.svg';
// import { useState } from 'react'
// // const Button = (props) => {
// //   console.log(props)
// //   const { handleClick, text } = props
// //   return (
// //     <button onClick={handleClick}>
// //       {text}
// //     </button>
// //   )
// // }
// const App = () => {
//   // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)
//   // const [allClicks, setAll] = useState([])
//   // const [total, setTotal] = useState(0)

//   // const handleLeftClick = () => {
//   //   // setAll(allClicks.concat('L'))
//   //   // console.log("left before ", left)
//   //   // setLeft(left + 1)
//   //   // console.log("left after ", left)

//   //   // setTotal(left + right);
//   //   // 
//   //   // allClicks.push('L')
//   //   // setAll(allClicks)
//   //   // setLeft(left + 1)
//   //   setAll(allClicks.concat('L'))
//   //   const updetedLeft = left + 1
//   //   setLeft(updetedLeft)
//   //   setTotal(updetedLeft + right)
//   // }

//   // const handleRightClick = () => {
//   //   // setAll(allClicks.concat('R'))
//   //   // setRight(right + 1)
//   //   // setTotal(left + right)
//   //   setAll(allClicks.concat('R'))
//   //   const updetedRight = right + 1;
//   //   setRight(updetedRight)
//   //   setTotal(updetedRight + left)
//   // }

//   // return (
//   //   <div>
//   //     {left}
//   //     <button onClick={handleLeftClick}>left</button>
//   //     <button onClick={handleRightClick}>right</button>
//   //     {right}
//   //     <p>{allClicks.join(' ')}</p>
//   //     <p>total {total}</p>
//   //     <Button />
//   //   </div>
//   // )
//   // const [age, setAge] = useState(0)
//   // const [name, setName] = useState('Misha Rusyn')
//   // if (age > 10) {
//   //   const [foobar, setFootbar] = useState(null)
//   // }
//   // for (let i = 0; i < age; i++) {
//   //   const [rightMay, setRightMay] = useState(false)
//   // }
//   // const notGood = () => {
//   //   const [x, setX] = useState(-1000);
//   // }

//   const [value, setValue] = useState(10)
//   const setToValue = (newValue) => () => {
//     console.log("value now", newValue)
//     setValue(newValue)
//   }
//   const Button = (props) => {
//     <button onClick={props.handleClick}>{props}</button>
//   }



//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>button</button>
//       <button onClick={setToValue(12)}>button</button>
//       <button onClick={setToValue(value + 1)}>button</button>
//       <button onClick={() => setToValue(0)}>reset</button>


//     </div>
//     // <div>
//     //   <p>{value}</p>
//     // </div>
//   )
// }

// export default App;
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const avarage = (good - bad) / all
  const positive = (good / all) * 100

  // const handleGood = () => {
  //   setGood(good + 1)
  // }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>avarage {avarage}</p>
      <p>positive {positive} %</p>

    </div>
  )
}

export default App