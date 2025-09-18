import PropTypes from 'prop-types';
import OrderItem from './OrderItem';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h2>Lista de Pedidos</h2>
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          customer={order.customer}
          items={order.items}
          status={order.status}
          date={order.date}
        />
      ))}
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default OrderList;
