import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer greeting="¡Disfruta la bebida perfecta para cada ocasión!"/>
        <div className='itemCard'>
          <h3 className='itemCardTitle'>Cerveza Artesanal SanCris</h3>
          <ItemCount stock={5} initial={1} />
          <button>Agregar al carrito</button>
        </div>
      </header>
    </div>
  );
}

export default App;
