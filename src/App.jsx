import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [likes3, setLikes3] = useState(0);

  function goBack(e) {
    e.preventDefault();
    setSubmitted("");
    setLikes1(0);
    setLikes2(0);
    setLikes3(0);
  };

  function increaseLikes1(e) {
    e.preventDefault();
    setLikes1(likes1=>likes1+1);
  };

  function increaseLikes2(e) {
    e.preventDefault();
    setLikes2(likes2=>likes2+1);
  };

  function increaseLikes3(e) {
    e.preventDefault();
    setLikes3(likes3=>likes3+1);
  };

  function changeSubmitted(e) {
    e.preventDefault();
    setSubmitted(input);
  };

  function changeInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  };

  if(submitted == "") {
    return (
      <div>
        <h1>Who is your favourite artist?</h1>
        <form onSubmit={changeSubmitted}>
          <input type="text" placeholder="Who is your favourite artist?" onChange={changeInput}/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  } else if (submitted.toLowerCase() == "dirt poor robins") {
    return (
      <div>
        <h1>{submitted}</h1>
        <ul>
          <li>Welcome to Lady Hell {likes1 + 4092591}</li>
          <button onClick={increaseLikes1}>Like!</button>
          <li>Great Vacation {likes2 + 3915522}</li>
          <button onClick={increaseLikes2}>Like!</button>
          <li>It Tore Your Heart Out {likes3 + 2272628}</li>
          <button onClick={increaseLikes3}>Like!</button>
        </ul>
        <button onClick={goBack}>Back</button>
      </div>
    )
  } else if (submitted.toLowerCase() == "mariah carey") {
    return (
      <div>
        <h1>{submitted}</h1>
        <ul>
          <li>All I Want for Christmas Is You ({likes1 + 1801735779})</li>
          <button onClick={increaseLikes1}>Like!</button>
          <li>We Belong Together ({likes2 + 567271465})</li>
          <button onClick={increaseLikes2}>Like!</button>
          <li>Fantasy ({likes3 + 368876950})</li>
          <button onClick={increaseLikes3}>Like!</button>
        </ul>
        <button onClick={goBack}>Back</button>
      </div>
    )
  } else if (submitted.toLowerCase() == "6lack") {
    return (
      <div>
        <h1>{submitted}</h1>
        <ul>
          <li>Calling My Phone ({likes1 + 738994668})</li>
          <button onClick={increaseLikes1}>Like!</button>
          <li>OTW ({likes2 + 611499126})</li>
          <button onClick={increaseLikes2}>Like!</button>
          <li>PRBLMS ({likes3 + 449658569})</li>
          <button onClick={increaseLikes3}>Like!</button>
        </ul>
        <button onClick={goBack}>Back</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Your favourite artist is not good enough, pick something else</h1>
        <button onClick={goBack}>Back</button>
      </div>
    )
  }
}

export default App
