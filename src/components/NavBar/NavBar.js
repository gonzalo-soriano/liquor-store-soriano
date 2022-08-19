import logo  from '../../logo.svg';
import './styles.css';

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="logoName">
                <img src={logo} alt="logo" />
                <h3>The Liquor Store</h3>
            </div>
            <div>
                <ul>
                    <li><a href="#">Vinos</a></li>
                    <li><a href="#">Destilados</a></li>
                    <li><a href="#">Cervezas</a></li>
                    <li><a href="#">Otros</a></li>
                    <li><a href="#">Promociones</a></li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default NavBar;