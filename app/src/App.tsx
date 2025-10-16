import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import OrderForm from "./components/OrderForm";
import OrderFilter from "./components/OrderFilter";
import OrderStats from "./components/OrderStats";
import OrderList from "./components/OrderList";
import { orders as initialOrders } from "./data/orders";

const Home = () => <h1>¡Bienvenidos a la gestión de pedidos!</h1>;

const Formulario = ({ onAddOrder }) => (
  <div>
    <OrderForm onAddOrder={onAddOrder} />
  </div>
);

const FiltroEstadisticas = ({
  orders,
  filter,
  setFilter,
  stats,
  filteredOrders,
}) => (
  <div>
    <OrderFilter filter={filter} onFilterChange={setFilter} />
    <OrderStats {...stats} />
    <OrderList orders={filteredOrders} />
  </div>
);

const App: React.FC = () => {
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
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/formulario">Formulario</Link>
          <Link to="/estadisticas">Filtro y Estadísticas</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/formulario"
            element={<Formulario onAddOrder={handleAddOrder} />}
          />
          <Route
            path="/estadisticas"
            element={
              <FiltroEstadisticas
                orders={orders}
                filter={filter}
                setFilter={setFilter}
                stats={stats}
                filteredOrders={filteredOrders}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;