import Person from './components/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person firstName="Shelly" lastName="Gupta" age="30" hairColor="Brown" />
      <Person firstName="Jatin" lastName="Gupta" age="30" hairColor="Black" />
      <Person firstName="John" lastName="deo" age="35" hairColor="Red" />
    </div>
  );
}

export default App;
