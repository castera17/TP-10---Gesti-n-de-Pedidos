import PropTypes from 'prop-types';

const OrderFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="order-filter">
      <label htmlFor="status-filter">Filtrar por Estado:</label>
      <select
        id="status-filter"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
};

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(['', 'pending', 'shipped', 'delivered']),
  onFilterChange: PropTypes.func.isRequired,
};

export default OrderFilter;
