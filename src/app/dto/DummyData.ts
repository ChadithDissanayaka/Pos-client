import { Customer } from './Customer';
import { Product } from './Product';
import { Order } from './Order';


export const DUMMY_CUSTOMERS: Customer[] = [
  { id: 1, name: 'Alice Johnson', address: '12 Maple Street, New York, NY 10001', salary: 75000 },
  { id: 2, name: 'Bob Smith', address: '45 Oak Avenue, Los Angeles, CA 90001', salary: 92000 },
  { id: 3, name: 'Carol White', address: '78 Pine Road, Chicago, IL 60601', salary: 68000 },
  { id: 4, name: 'David Brown', address: '23 Elm Drive, Houston, TX 77001', salary: 110000 },
  { id: 5, name: 'Eva Martinez', address: '56 Cedar Lane, Phoenix, AZ 85001', salary: 83000 },
  { id: 6, name: 'Frank Wilson', address: '90 Birch Blvd, Philadelphia, PA 19101', salary: 55000 },
  { id: 7, name: 'Grace Lee', address: '34 Walnut Court, San Antonio, TX 78201', salary: 97000 },
  { id: 8, name: 'Henry Davis', address: '67 Spruce Way, San Diego, CA 92101', salary: 61000 },
  { id: 9, name: 'Isla Thomas', address: '11 Ash Place, Dallas, TX 75201', salary: 79000 },
  { id: 10, name: 'Jack Harris', address: '88 Poplar Street, San Jose, CA 95101', salary: 130000 },
  { id: 11, name: 'Karen Clark', address: '22 Magnolia Ave, Austin, TX 78701', salary: 72000 },
  { id: 12, name: 'Leo Lewis', address: '55 Chestnut Rd, Jacksonville, FL 32201', salary: 64000 },
];

export const DUMMY_PRODUCTS: Product[] = [
  { id: 1, description: 'Wireless Keyboard', qtyOnHand: 150, unitPrice: 49.99 },
  { id: 2, description: 'USB-C Hub 7-Port', qtyOnHand: 85, unitPrice: 34.99 },
  { id: 3, description: '27" 4K Monitor', qtyOnHand: 30, unitPrice: 399.99 },
  { id: 4, description: 'Ergonomic Mouse', qtyOnHand: 200, unitPrice: 29.99 },
  { id: 5, description: 'Mechanical Keyboard RGB', qtyOnHand: 60, unitPrice: 89.99 },
  { id: 6, description: 'Laptop Stand Adjustable', qtyOnHand: 120, unitPrice: 24.99 },
  { id: 7, description: 'Webcam 1080p', qtyOnHand: 75, unitPrice: 59.99 },
  { id: 8, description: 'Noise Cancelling Headset', qtyOnHand: 45, unitPrice: 149.99 },
  { id: 9, description: 'SSD 1TB External', qtyOnHand: 90, unitPrice: 79.99 },
  { id: 10, description: 'HDMI Cable 2m', qtyOnHand: 300, unitPrice: 12.99 },
  { id: 11, description: 'Desk Mat XL', qtyOnHand: 180, unitPrice: 19.99 },
  { id: 12, description: 'LED Desk Lamp', qtyOnHand: 55, unitPrice: 39.99 },
];

export const DUMMY_ORDERS: Order[] = [
  {
    id: 1001,
    orderCost: 584.96,
    items: [
      { productId: 3, productDescription: '27" 4K Monitor', qty: 1, unitPrice: 399.99 },
      { productId: 1, productDescription: 'Wireless Keyboard', qty: 1, unitPrice: 49.99 },
      { productId: 4, productDescription: 'Ergonomic Mouse', qty: 1, unitPrice: 29.99 },
      { productId: 6, productDescription: 'Laptop Stand Adjustable', qty: 2, unitPrice: 24.99 },
    ],
    date: '2024-01-15',
    customerId: 1,
    customerName: 'Alice Johnson',
  },
  {
    id: 1002,
    orderCost: 239.97,
    items: [
      { productId: 5, productDescription: 'Mechanical Keyboard RGB', qty: 1, unitPrice: 89.99 },
      { productId: 7, productDescription: 'Webcam 1080p', qty: 2, unitPrice: 59.99 },
      { productId: 10, productDescription: 'HDMI Cable 2m', qty: 1, unitPrice: 12.99 },
    ],
    date: '2024-02-03',
    customerId: 2,
    customerName: 'Bob Smith',
  },
  {
    id: 1003,
    orderCost: 309.97,
    items: [
      { productId: 8, productDescription: 'Noise Cancelling Headset', qty: 2, unitPrice: 149.99 },
      { productId: 2, productDescription: 'USB-C Hub 7-Port', qty: 1, unitPrice: 34.99 },
    ],
    date: '2024-02-20',
    customerId: 3,
    customerName: 'Carol White',
  },
  {
    id: 1004,
    orderCost: 159.97,
    items: [
      { productId: 9, productDescription: 'SSD 1TB External', qty: 2, unitPrice: 79.99 },
    ],
    date: '2024-03-05',
    customerId: 4,
    customerName: 'David Brown',
  },
  {
    id: 1005,
    orderCost: 99.97,
    items: [
      { productId: 11, productDescription: 'Desk Mat XL', qty: 2, unitPrice: 19.99 },
      { productId: 12, productDescription: 'LED Desk Lamp', qty: 1, unitPrice: 39.99 },
      { productId: 10, productDescription: 'HDMI Cable 2m', qty: 2, unitPrice: 12.99 },
    ],
    date: '2024-03-18',
    customerId: 5,
    customerName: 'Eva Martinez',
  },
  {
    id: 1006,
    orderCost: 469.95,
    items: [
      { productId: 3, productDescription: '27" 4K Monitor', qty: 1, unitPrice: 399.99 },
      { productId: 4, productDescription: 'Ergonomic Mouse', qty: 1, unitPrice: 29.99 },
      { productId: 2, productDescription: 'USB-C Hub 7-Port', qty: 1, unitPrice: 34.99 },
    ],
    date: '2024-04-10',
    customerId: 6,
    customerName: 'Frank Wilson',
  },
  {
    id: 1007,
    orderCost: 219.96,
    items: [
      { productId: 5, productDescription: 'Mechanical Keyboard RGB', qty: 1, unitPrice: 89.99 },
      { productId: 7, productDescription: 'Webcam 1080p', qty: 1, unitPrice: 59.99 },
      { productId: 12, productDescription: 'LED Desk Lamp', qty: 1, unitPrice: 39.99 },
      { productId: 11, productDescription: 'Desk Mat XL', qty: 1, unitPrice: 19.99 },
    ],
    date: '2024-04-25',
    customerId: 7,
    customerName: 'Grace Lee',
  },
  {
    id: 1008,
    orderCost: 129.98,
    items: [
      { productId: 1, productDescription: 'Wireless Keyboard', qty: 1, unitPrice: 49.99 },
      { productId: 8, productDescription: 'Noise Cancelling Headset', qty: 1, unitPrice: 149.99 },
    ],
    date: '2024-05-12',
    customerId: 8,
    customerName: 'Henry Davis',
  },
];

export const INCOME_HISTORY = [
  { month: 'Jan', income: 12400 },
  { month: 'Feb', income: 18600 },
  { month: 'Mar', income: 15200 },
  { month: 'Apr', income: 22800 },
  { month: 'May', income: 19500 },
  { month: 'Jun', income: 27300 },
  { month: 'Jul', income: 24100 },
  { month: 'Aug', income: 31500 },
  { month: 'Sep', income: 28900 },
  { month: 'Oct', income: 35200 },
  { month: 'Nov', income: 32700 },
  { month: 'Dec', income: 41000 },
];
