export interface IPartnersComponentProps {
    history?: any;
    processPartnersOrderSubmit?: (partner: string, macQty: number, zepQty: number) => void;
}
export interface IPartnersComponentState {
    partner?: string;
    macaronsQty?: number;
    zephyrQty?: number;
}
declare const _default: any;
export default _default;
