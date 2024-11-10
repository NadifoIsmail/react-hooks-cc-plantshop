import React from "react";
import PlantList from "./PlantList";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchPlant, setSearchPlant] = useState("");
  
  //fetch all plants
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  //function to add a new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
    toast.success("New plant added successfully");
  }

  //function to delete a plant
  function handleDelete(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setPlants(plants.filter((plant) => plant.id !== id));
        toast.success("Plant deleted successfully");
      });
  }
  //function to update plant price
  function updatePrice(updatedPricePlant) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPricePlant.id ?  updatedPricePlant: plant
     )
    );
  };
  
  //filter plants based on what you are searching
  const updatedPlantList = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchPlant={searchPlant} setSearchPlant={setSearchPlant} />
      <PlantList
        updatedPlantList={updatedPlantList}
        handleDelete={handleDelete}
        updatePrice={updatePrice}
      />
    </main>
  );
}

export default PlantPage;
