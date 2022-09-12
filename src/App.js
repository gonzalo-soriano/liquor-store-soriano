import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const greeting = "¡Disfruta la bebida perfecta para cada ocasión!";
function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
