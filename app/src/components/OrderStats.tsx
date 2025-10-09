import React from "react";

export interface OrderStatsProps {
  total: number;
  pending: number;
  shipped: number;
  delivered: number;
}

const OrderStats: React.FC<OrderStatsProps> = ({
  total,
  pending,
  shipped,
  delivered,
}) => (
  <div className="order-stats">
    <h2>Estadísticas</h2>
    <p>Total de Pedidos: {total}</p>
    <p>Pending: {pending}</p>
    <p>Shipped: {shipped}</p>
    <p>Delivered: {delivered}</p>
  </div>
);

export default OrderStats;