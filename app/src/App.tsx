import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import OrderForm from "./components/OrderForm";
import OrderFilter from "./components/OrderFilter";
import OrderStats from "./components/OrderStats";
import OrderList from "./components/OrderList";
import { orders as initialOrders } from "./data/orders.ts";
import { OrderItemProps, OrderStatus } from "./components/OrderItem";

const Home = () => <h1>¡Bienvenidos a la gestión de pedidos!</h1>;

const Formulario = ({ onAddOrder }: { onAddOrder: (order: OrderItemProps) => void }) => (
  <div><OrderForm onAddOrder={onAddOrder} /></div>
);

const FiltroEstadisticas = ({
  orders,
  filter,
  setFilter,
  stats,
  filteredOrders,
}: {
  orders: OrderItemProps[];
  filter: string;
  setFilter: (filter: string) => void;
  stats: { total: number; pending: number; shipped: number; delivered: number };
  filteredOrders: OrderItemProps[];
}) => (
  <div>
    <OrderFilter filter={filter as "" | OrderStatus} onFilterChange={setFilter} />
    <OrderStats {...stats} />
    <OrderList orders={filteredOrders} />
  </div>
);

const App: React.FC = () => {
  const [orders, setOrders] = useState<OrderItemProps[]>(initialOrders);
  const [filter, setFilter] = useState<string>("");

  const filteredOrders =
    !filter ? orders : orders.filter((order) => order.status === filter);

  const total = orders.length;
  const pending = orders.filter((o) => o.status === "pending").length;
  const shipped = orders.filter((o) => o.status === "shipped").length;
  const delivered = orders.filter((o) => o.status === "delivered").length;
  const stats = { total, pending, shipped, delivered };

  const handleAddOrder = (newOrder: OrderItemProps) => setOrders([...orders, newOrder]);

  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-card active" : "nav-card")}>
            Home
          </NavLink>
          <NavLink to="/formulario" className={({ isActive }) => (isActive ? "nav-card active" : "nav-card")}>
            Nuevo Pedido
          </NavLink>
          <NavLink to="/estadisticas" className={({ isActive }) => (isActive ? "nav-card active" : "nav-card")}>
            Estadísticas
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario onAddOrder={handleAddOrder} />} />
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
