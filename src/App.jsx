import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Confirm from "./Components/Confirm"; 
import { frameworks } from "./utils/frameworks";

function App() {
  const [isSelected, setIsSelected] = useState({
    framework: null,
    status: false,
  });
  const [isConfirmed, setIsConfirmed] = useState(false); 
  const [estudiante, setEstudiante] = useState({ nombre: "", matricula: "" }); 

  const handleConfirmation = (nombre) => {
    setEstudiante({ ...estudiante, nombre }); 
    setIsConfirmed(true); 
  };

  return (
    <div className="app">
      {!isConfirmed ? ( 
        <>
          <h1>Bienvenido!</h1>
          <h2>Elige el curso al que te quieres inscribir</h2>
        </>
      ) : (
        <Confirm
          nombre={estudiante.nombre} 
          framework={isSelected.framework.name} 
        />
      )}

      {isSelected.status && !isConfirmed ? (
        <Form
          framework={isSelected.framework}
          handleConfirmation={handleConfirmation} 
        />
      ) : null}

      <div className="cards-container">
        {frameworks.map((framework) => (
          <Card
            key={framework.id}
            framework={framework}
            setIsSelected={setIsSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;