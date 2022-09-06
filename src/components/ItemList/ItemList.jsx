import Item from '../Item/Item';

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <>
            {items.map(item =>

                <Item key={item.id} pictureurl={item.pictureurl} title={item.title} price={item.price} description={item.description} />

            )}
        </>
    )
}

export default ItemList;