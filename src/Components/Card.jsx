// eslint-disable-next-line react/prop-types
const Card = ({ framework, setIsSelected }) => {
  return (
    <div className="card">
      <h2>{framework.name}</h2>
      <img src={framework.img} alt="" />
      <button
        onClick={() => setIsSelected({ framework: framework, status: true })}
      >
        Seleccionar
      </button>
    </div>
  );
};

export default Card;