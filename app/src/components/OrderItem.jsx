import PropTypes from 'prop-types';

const OrderItem = ({ id, customer, items, status, date }) => {
  return (
    <div className="order-item">
      <h3>Pedido ID: {id}</h3>
      <p>Cliente: {customer}</p>
      <p>Fecha: {date.toLocaleDateString()}</p>
      <p>Estado: {status}</p>
      <h4>Productos:</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  status: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
  date: PropTypes.instanceOf(Date),
};

OrderItem.defaultProps = {
  date: new Date(),
};

export default OrderItem;
