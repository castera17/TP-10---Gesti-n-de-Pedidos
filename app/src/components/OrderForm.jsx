import { useState } from 'react';
import PropTypes from 'prop-types';

const OrderForm = ({ onAddOrder }) => {
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([{ productId: '', name: '', quantity: '', price: '' }]);
  const [status, setStatus] = useState('pending');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { productId: '', name: '', quantity: '', price: '' }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (customer.length < 3) {
      alert('Customer name must be at least 3 characters');
      return;
    }
    if (items.some(item => !item.name || item.quantity <= 0 || !item.price)) {
      alert('All item fields must be filled and quantity > 0');
      return;
    }
    const newOrder = {
      id: Date.now(), // Simple ID
      customer,
      items: items.map(item => ({
        productId: parseInt(item.productId),
        name: item.name,
        quantity: parseInt(item.quantity),
        price: parseFloat(item.price)
      })),
      status,
      date: new Date(date)
    };
    onAddOrder(newOrder);
    // Reset form
    setCustomer('');
    setItems([{ productId: '', name: '', quantity: '', price: '' }]);
    setStatus('pending');
    setDate(new Date().toISOString().split('T')[0]);
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
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
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
            placeholder="Product ID"
            value={item.productId}
            onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={item.name}
            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
            min="1"
            required
          />
          <input
            type="number"
            step="0.01"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleItemChange(index, 'price', e.target.value)}
            required
          />
          <button type="button" onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem}>Add Item</button>
      <button type="submit">Agregar Pedido</button>
    </form>
  );
};

OrderForm.propTypes = {
  onAddOrder: PropTypes.func.isRequired,
};

export default OrderForm;
