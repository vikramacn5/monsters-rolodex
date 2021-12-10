import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankinstein",
          id: "asc1",
        },
        {
          name: "Zombie",
          id: "asc2",
        },
        {
          name: "MarkIV",
          id: "asc3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         {[
  //           <p>{this.state.name}</p>,
  //           <p>{this.state.name}</p>,
  //           <p>{this.state.name}</p>,
  //         ]}
  //         <button
  //           onClick={() => {
  //             this.setState({ name: "Hello I am markIV" });
  //           }}
  //         >
  //           Click me
  //         </button>
  //       </header>
  //     </div>
  //   );
  // }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
