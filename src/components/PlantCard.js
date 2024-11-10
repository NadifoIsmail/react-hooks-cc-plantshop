import React from "react";
import { useState } from "react";

function PlantCard({ plant, handleDelete, updatePrice }) {
  const [inStock, setInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(plant.price);

  const handleBuy = () => {
    setInStock(false);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const price = parseFloat(newPrice);

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        price: price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        updatePrice(updatedPlant);
      });
  };
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price:{plant.price}</p>
      <input type="number" value={newPrice} onChange={handlePriceChange} />
      {inStock ? (
        <button className="primary" onClick={handleBuy}>
          In Stock
        </button>
      ) : (
        <button disabled>Out of Stock</button>
      )}

      <button onClick={handleUpdate}>Update Price</button>
      <div>
        <button type="button" onClick={() => handleDelete(plant.id)}>
          DELETE
        </button>
      </div>
    </li>
  );
}

export default PlantCard;
