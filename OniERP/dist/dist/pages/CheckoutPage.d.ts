/// <reference types="react" />
import { Component } from 'react';
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
export declare class CheckoutPage extends Component<ICheckoutPageProps, any> {
    handleCheckout: () => void;
    handleCancel: () => void;
    handleBack: () => void;
    handlePaymentTypeChange: (type: Payment) => void;
    handleOrderTypeChange: (type: OrderType) => void;
    calculatePrice(): number;
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
