import './App.css';
import React from 'react';


function App() {
  const [advice, setAdvice] = React.useState([])
  const [count, setCount] = React.useState(0)

  
  React.useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then((data) => setAdvice(data.slip))
  }, [count]);

  function handleClick() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      {`ADVICE #${advice.id}`}
      <br/>{advice.advice}
      <svg  onClick={handleClick} className= "button" width="40" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
    </div>
  )
  
}

export default App;
