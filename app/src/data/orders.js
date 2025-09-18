export const orders = [
  {
    id: 1,
    customer: 'Juan Pérez',
    items: [
      { productId: 101, name: 'Producto A', quantity: 2, price: 10.0 },
      { productId: 102, name: 'Producto B', quantity: 1, price: 20.0 }
    ],
    status: 'pending',
    date: new Date('2023-10-01')
  },
  {
    id: 2,
    customer: 'María García',
    items: [
      { productId: 103, name: 'Producto C', quantity: 3, price: 15.0 }
    ],
    status: 'shipped',
    date: new Date('2023-10-02')
  },
  {
    id: 3,
    customer: 'Carlos López',
    items: [
      { productId: 104, name: 'Producto D', quantity: 1, price: 30.0 },
      { productId: 105, name: 'Producto E', quantity: 2, price: 25.0 }
    ],
    status: 'delivered',
    date: new Date('2023-10-03')
  },
  {
    id: 4,
    customer: 'Ana Rodríguez',
    items: [
      { productId: 106, name: 'Producto F', quantity: 4, price: 5.0 }
    ],
    status: 'pending',
    date: new Date('2023-10-04')
  },
  {
    id: 5,
    customer: 'Luis Martínez',
    items: [
      { productId: 107, name: 'Producto G', quantity: 1, price: 50.0 }
    ],
    status: 'shipped',
    date: new Date('2023-10-05')
  }
];
