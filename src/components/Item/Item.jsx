import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';
import './styles.css'

const Item = ({ jsonpack }) => {
    return (
        <>
            <Card className="itemCard">

                <Card.Header>

                    <Card.Img src={jsonpack.pictureurl} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>{jsonpack.title}</Card.Title>
                    <Card.Subtitle>Precio: {jsonpack.price}</Card.Subtitle>
                    <Card.Text>
                        Descripción: {jsonpack.description}
                        <ItemCount stock={5} initial={1} />
                        <button>Agregar al carrito</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>


    );

};



export default Item;