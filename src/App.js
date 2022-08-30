import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="¡Disfruta la bebida perfecta para cada ocasión!"/>
      </header>
    </div>
  );
}

export default App;
