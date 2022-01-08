import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tableau from './Tableau';
import Navbar from './Navbar';
import Liste from './Liste';
import Formulaire from './Formulaire';
import Header from './Header';
import Greet from './Greet';
import Welcome from './Welcome';
import Hello from './Hello';
import Message from './Message';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">      
//           <Navbar />
//         <img src={logo} className="App-logo" alt="logo" /> 
//           Edit <code>src/App.js</code> and save to reload.
//           <Liste />
//           <Tableau />
//           <Formulaire />
//           <Greet />
//           <Welcome />
//            <Header />
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
 class App extends Component{
   render() {
     return(
       <div className="App-header">
         <Message />
         <Greet name="Desmond" heroName="Batname">
           <p>This is my children</p>
         </Greet>
         <Welcome name="Christabelle" heroName="Batname" />
           <button>Action</button>
         <Hello />
       </div>
     );
   }
 }

export default App;
