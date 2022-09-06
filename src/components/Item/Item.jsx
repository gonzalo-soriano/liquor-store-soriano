import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';
import './styles.css'

const Item = ({ pictureurl, title, price, description}) => {
    return (
        <>
            <Card className="itemCard">

                <Card.Header>

                    <Card.Img src={pictureurl} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>Precio: {price}</Card.Subtitle>
                    <Card.Text>
                        Descripción: {description}
                        <ItemCount stock={5} initial={1} />
                        <button>Agregar al carrito</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>


    );

};



export default Item;