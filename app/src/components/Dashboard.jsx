import { useState, useMemo } from 'react';
import OrderList from './OrderList';
import OrderFilter from './OrderFilter';
import OrderStats from './OrderStats';
import OrderForm from './OrderForm';
import { orders as initialOrders } from '../data/orders';

const Dashboard = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState('');

  const filteredOrders = useMemo(() => {
    if (!filter) return orders;
    return orders.filter(order => order.status === filter);
  }, [filter, orders]);

  const stats = useMemo(() => {
    const total = orders.length;
    const pending = orders.filter(o => o.status === 'pending').length;
    const shipped = orders.filter(o => o.status === 'shipped').length;
    const delivered = orders.filter(o => o.status === 'delivered').length;
    return { total, pending, shipped, delivered };
  }, [orders]);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard de Pedidos</h1>
      <OrderForm onAddOrder={handleAddOrder} />
      <OrderFilter filter={filter} onFilterChange={setFilter} />
      <OrderStats {...stats} />
      <OrderList orders={filteredOrders} />
    </div>
  );
};

export default Dashboard;
