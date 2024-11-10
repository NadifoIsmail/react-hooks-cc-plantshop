import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ updatedPlantList, handleDelete, updatePrice }) {
  return (
    <ul className="cards">
      {updatedPlantList.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handleDelete={handleDelete}
          updatePrice={updatePrice}
        />
      ))}
    </ul>
  );
}

export default PlantList;
