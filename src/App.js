import './App.css';
import AppRouters from './Components/AppRouters';
import Context from './Components/Context';
// import MainInfo from './Components/MainInfo';

function App() {
  return (
    <Context>
      <div className="App">
        <AppRouters />
      </div>
    </Context>
  );
}

export default App;
