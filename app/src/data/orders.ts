import { OrderItemProps } from "../components/OrderItem";
export const orders: OrderItemProps[] = [
  {
    id: 1,
    customer: "Juan Pérez",
    items: [
      { productId: 101, name: "Laptop", quantity: 1, price: 1200 },
      { productId: 102, name: "Mouse", quantity: 2, price: 25 },
    ],
    status: "pending",
    date: new Date("2023-10-01"),
  },
  {
    id: 2,
    customer: "Ana García",
    items: [
      { productId: 103, name: "Teclado", quantity: 1, price: 50 },
    ],
    status: "shipped",
    date: new Date("2023-10-02"),
  },
  {
    id: 3,
    customer: "Carlos López",
    items: [
      { productId: 104, name: "Monitor", quantity: 1, price: 300 },
    ],
    status: "delivered",
    date: new Date("2023-10-03"),
  },
];
