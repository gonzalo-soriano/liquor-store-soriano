import ItemDetail from '../ItemDetail/ItemDetail';
import jsonpack from '../data.json';
import React, { useState, useEffect } from 'react';
import './styles.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jsonpack)
    }, 2000)
  })

  useEffect(() => {
    getItem.then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <div>
      <div className="Catalogue">
        <ItemDetail items={item} />
      </div>
    </div>
  )
}

export default ItemDetailContainer