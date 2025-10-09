import React from "react";
import OrderItem, { OrderItemProps } from "./OrderItem";

export interface OrderListProps {
  orders: OrderItemProps[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => (
  <div className="order-list">
    <h2>Lista de Pedidos</h2>
    {orders.map((order) => (
      <OrderItem
        key={order.id}
        {...order}
      />
    ))}
  </div>
);

export default OrderList;