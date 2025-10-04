import PropTypes from 'prop-types';

export const productShape = PropTypes.shape({
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
});

export const categoryShape = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});