import React, { useState } from "react";
import { OrderStatus, OrderProduct, OrderItemProps } from "./OrderItem";

export interface OrderFormProps {
  onAddOrder: (order: OrderItemProps) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onAddOrder }) => {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState<OrderProduct[]>([
    { productId: 0, name: "", quantity: 1, price: 0 },
  ]);
  const [status, setStatus] = useState<OrderStatus>("pending");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleItemChange = (
    index: number,
    field: keyof OrderProduct,
    value: string | number
  ) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: field === "quantity" || field === "productId" || field === "price"
        ? Number(value)
        : value,
    };
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { productId: 0, name: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (customer.length < 3) {
      alert("Customer name must be at least 3 characters");
      return;
    }
    if (items.some((item) => !item.name || item.quantity <= 0 || !item.price)) {
      alert("All item fields must be filled and quantity > 0");
      return;
    }
    const newOrder: OrderItemProps = {
      id: Date.now(),
      customer,
      items,
      status,
      date: new Date(date),
    };
    onAddOrder(newOrder);
   
    setCustomer("");
    setItems([{ productId: 0, name: "", quantity: 1, price: 0 }]);
    setStatus("pending");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Agregar Nuevo Pedido</h2>
      <div>
        <label>Cliente:</label>
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Estado:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as OrderStatus)}>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <h3>Productos:</h3>
      {items.map((item, index) => (
        <div key={index} className="item-row">
           <input
                type="number"
                placeholder="Cantidad"
                value={item.productId}
                onChange={(e) => handleItemChange(index, "productId", e.target.value)}
                required
            />
          <input
              type="text"
              placeholder="Nombre"
              value={item.name}
              onChange={(e) => handleItemChange(index, "name", e.target.value)}
              required
            />
           <input
                type="number"
                step="0.01"
                placeholder="Precio"
                value={item.price}
                onChange={(e) => handleItemChange(index, "price", e.target.value)}
                required
          />
          <button type="button" onClick={() => removeItem(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addItem}>Add Item</button>
      <button type="submit">Agregar Pedido</button>
    </form>
  );
};

export default OrderForm;