import { OrderItem } from './OrderItem';

export interface Order {
  id: number;
  orderCost: number;
  items: OrderItem[];
  date: string;
  customerId: number;
  customerName: string;
}
