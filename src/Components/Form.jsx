import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Form = ({ framework, handleConfirmation }) => {
  const [estudiante, setEstudiante] = useState({ nombre: "", matricula: "" });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      estudiante.nombre.length >= 3 &&
      estudiante.nombre.trim()[0] !== " " &&
      /^\d{6,}$/.test(estudiante.matricula)
    ) {
      setMostrar(true);
      handleConfirmation(estudiante.nombre); 
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {mostrar ? (
        <div>
          <h3>Gracias, {estudiante.nombre}!</h3>
          <h3> Tu inscripción para {framework.name} está lista!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setEstudiante({ ...estudiante, nombre: event.target.value })
            }
          />
          <label>Numero de matricula: </label>
          <input
            type="text"
            onChange={(event) =>
              setEstudiante({ ...estudiante, matricula: event.target.value })
            }
          />
          <button>Inscribirme!</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Coloque la información correctamente
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;