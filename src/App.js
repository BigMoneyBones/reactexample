import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyInfoComponent />
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const MyInfoComponent = () => {
  // const myName = "Jesse";
  const [myName, setMyName] = useState();
  // const myFavoriteColor = "Blue";
  const [myFavoriteColor, setMyFavoriteColor] = useState();
  // const myFavoriteMovies = [
  //   "Down To Earth",
  //   " Shawshank Redemption",
  //   " Up In Smoke",
  // ];
  const [myFavoriteMovies, setMyFavoriteMovies] = useState([]);
  const defaultInputColor = "blanchedalmond";

  return (
    <div>
      <span style={{ backgroundColor: myFavoriteColor }}>
        Hello, my name is {myName}
      </span>
      <br></br>
      <input
        style={{ backgroundColor: defaultInputColor }}
        type="text"
        onChange={(event) => {
          const name = event.target.value;
          setMyName(name);
        }}
      ></input>
      <br></br>
      <br></br>
      <span style={{ backgroundColor: myFavoriteColor }}>
        {" "}
        My favorite color is: {myFavoriteColor}
      </span>

      <br></br>

      <input
        style={{ backgroundColor: defaultInputColor }}
        type="text"
        onChange={(event) => {
          const color = event.target.value;
          setMyFavoriteColor(color);
        }}
      ></input>

      <br></br>
      <br></br>

      <span style={{ backgroundColor: myFavoriteColor }}>
        My favorite movies are :<br></br>
      </span>

      <span>
        <input
          style={{ backgroundColor: defaultInputColor }}
          type="text"
          onChange={(event) => {
            const movie = event.target.value;
            setMyFavoriteMovies([
              movie,
              myFavoriteMovies[1],
              myFavoriteMovies[2],
            ]);
          }}
        ></input>
        &nbsp; &nbsp;
        <input
          style={{ backgroundColor: defaultInputColor }}
          type="text"
          onChange={(event) => {
            const movie = event.target.value;
            setMyFavoriteMovies([
              myFavoriteMovies[0],
              movie,
              myFavoriteMovies[2],
            ]);
          }}
        ></input>
        &nbsp; &nbsp;
        <input
          style={{ backgroundColor: defaultInputColor }}
          type="text"
          onChange={(event) => {
            const movie = event.target.value;
            setMyFavoriteMovies([
              myFavoriteMovies[0],
              myFavoriteMovies[1],
              movie,
            ]);
          }}
        ></input>
      </span>

      <p style={{ backgroundColor: myFavoriteColor }}>
        {myFavoriteMovies.map((movie) => (
          <li>{movie}</li>
        ))}
      </p>

      <br></br>

      {/* <span>
        <input
          type="text"
          onChange={(event) => {
            const movie = event.target.value;
            setMyFavoriteMovies([
              movie,
              myFavoriteMovies[1],
              myFavoriteMovies[2],
            ]);
          }}
        ></input>
          &nbsp; &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const movie = event.target.value;
            setMyFavoriteMovies([
              myFavoriteMovies[0],
              movie,
              myFavoriteMovies[2],
            ]);
          }}
        ></input>
          &nbsp; &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const movie = event.target.value;
            setMyFavoriteMovies([
              myFavoriteMovies[0],
              myFavoriteMovies[1],
              movie,
            ]);
          }}
        ></input>
      </span> */}
    </div>
  );
};

export default App;

// Rules For React

/*
  1. PascalCase (React functional component name)
  2. Return statement with () and a single enclosing html element, usually <div> </div>
  3. Complonents can be included in other components like html elements.
*/

// EXAMPLE

/* 
  function MyInfoComponent () {
    const myName = 'Jesse'
    return (
      <div>
        {myName}
      </div>
    )
  }
*/

// Rules For React
