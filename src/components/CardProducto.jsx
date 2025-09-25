import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardProducto.css';

export default function CardProducto({ producto }) {
  return (
    <div className="card">
      <h3>{producto.title}</h3>
      <p>{producto.price}</p>
      <img src={producto.thumbnail} alt={producto.title}/>
      <Link className="ver-detalle" to={`/productos/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    discountPercentage: PropTypes.number,
    rating: PropTypes.number,
    stock: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};