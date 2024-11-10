import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
      <ToastContainer/>
    </div>
  );
}

export default App;
