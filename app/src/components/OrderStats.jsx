import PropTypes from 'prop-types';

const OrderStats = ({ total, pending, shipped, delivered }) => {
  return (
    <div className="order-stats">
      <h2>Estadísticas</h2>
      <p>Total de Pedidos: {total}</p>
      <p>Pending: {pending}</p>
      <p>Shipped: {shipped}</p>
      <p>Delivered: {delivered}</p>
    </div>
  );
};

OrderStats.propTypes = {
  total: PropTypes.number.isRequired,
  pending: PropTypes.number.isRequired,
  shipped: PropTypes.number.isRequired,
  delivered: PropTypes.number.isRequired,
};

export default OrderStats;
