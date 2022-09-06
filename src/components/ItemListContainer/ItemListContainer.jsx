import ItemList from '../ItemList/ItemList';
import jsonpack from '../data.json';
import React, { useState, useEffect } from 'react';
import './styles.css'

const ItemListContainer = ({ greeting }) => {
  const [item, setItems] = useState([])
  const call = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jsonpack)
    }, 2000)
  })

  useEffect(() => {
    call.then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="Catalogue">
        <ItemList items={item} />
      </div>
    </div>
  )
}

export default ItemListContainer