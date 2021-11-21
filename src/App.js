import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet'
import Hookcounter from './components/hookcounter';
import Hookcountera from './components/hookcountera';
import Hookcounterb from './components/hookcounterb';
import Hookcounterarray from './components/hookcounterarray';

function App() {
  return (
    <div className="App">
      <Greet name="Taylor" occupation="singer"></Greet>
      <Hookcounter></Hookcounter>
      <Hookcountera></Hookcountera><br></br>
      <Hookcounterb></Hookcounterb>
      <Hookcounterarray></Hookcounterarray>
    </div>
  );
}

export default App;
