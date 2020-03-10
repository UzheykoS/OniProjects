import { IOrder } from '@pages/Checkout/CheckoutStepper';
import axios from 'axios';

export function submitOrder(order: IOrder) {
  if (!process.env.ONI_WEB_SERVER_URL) {
    throw Error('No URL specified');
  }

  const instance = axios.create({
    baseURL: process.env.ONI_WEB_SERVER_URL,
    timeout: 1000,
    headers: { 'Content-type': 'application/json; charset=utf-8' },
  });
  return instance.post('sendWebOrder', JSON.stringify(order));
}
