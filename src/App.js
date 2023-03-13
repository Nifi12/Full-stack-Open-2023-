const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}
const ContentMix = (props) => {
  return (
    <p>
      {props.partContentMix.name} {props.partContentMix.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <ContentMix partContentMix={props.content[0]} />
      <ContentMix partContentMix={props.content[1]} />
      <ContentMix partContentMix={props.content[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts.reduce((total, part) => part.exercises + total, 0)}
    </p>
  )
}

export default App
// import { useState } from 'react'
// const Display = (props) => <div>{props.counter}</div>
// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// )

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={setToZero} text="zero" />
//       <Button handleClick={decreaseByOne} text="minus" />
//     </div>
//   )
// }

// export default App