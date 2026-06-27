import "./ContenedorTarjetas.css";
import Tarjeta from "../Tarjeta/Tarjeta";

const ContenedorTarjetas = ({ tarjetas }) => {
  return (
    <div className="contenedor-tarjetas">
      {tarjetas.map((tarjeta) => (
        <Tarjeta key={tarjeta.id} {...tarjeta} />
      ))}
    </div>
  );
};

export default ContenedorTarjetas;
