import React from "react";
import { OrderStatus } from "./OrderItem";

export interface OrderFilterProps {
  filter: "" | OrderStatus;
  onFilterChange: (status: "" | OrderStatus) => void;
}

const OrderFilter: React.FC<OrderFilterProps> = ({ filter, onFilterChange }) => (
  <div className="order-filter">
    <label htmlFor="status-filter">Filtrar por Estado:</label>
    <select
      id="status-filter"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value as "" | OrderStatus)}
    >
      <option value="">Todos</option>
      <option value="pending">Pending</option>
      <option value="shipped">Shipped</option>
      <option value="delivered">Delivered</option>
    </select>
  </div>
);

export default OrderFilter;