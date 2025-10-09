import React from "react";

export type OrderStatus = "pending" | "shipped" | "delivered";

export interface OrderProduct {
  productId: number;
  name: string;
  quantity: number; 
  price: number;
}

export interface OrderItemProps {
  id: number;
  customer: string;
  items: OrderProduct[];
  status: OrderStatus;
  date?: Date;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  customer,
  items,
  status,
  date = new Date(),
}) => (
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

export default OrderItem;