// eslint-disable-next-line react/prop-types
const Confirm = ({ nombre, framework }) => {
    return (
      <div>
        <h3>Gracias, {nombre}!</h3>
        <h3>Tu inscripción para {framework} está lista!</h3>
      </div>
    );
  };
  
  export default Confirm;