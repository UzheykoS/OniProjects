import { Payment, OrderType, Check } from '../utils/types';
export interface ICheckoutPageProps {
    history?: any;
    check?: Check;
    setPaymentType?: (type: Payment) => void;
    setOrderType?: (type: OrderType) => void;
    handleCheckout?: () => void;
    handleCancel?: () => void;
    logData?: (text: string) => void;
}
declare const _default: any;
export default _default;
