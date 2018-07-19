export interface Dessert {
    id: number,
    type: DessertType,
    taste: string
}

export interface Drink {
    id: number,
    type: DrinksType,
    size: string
}

export interface Check {
    id: number,
    desserts: Array<Dessert>,
    drinks: Array<Drink>,
    isFinished: boolean,
    payment: Payment,
    type: OrderType
}

export enum Payment {
    Card,
    Cash,
    Other
}

export enum OrderType {
    PreOrder,
    Shop,
    Other
}

export enum DessertType {
    Macaron = 'Macaron',
    Zephyr = 'Zephyr',
    Cake = 'Cake'
}

export enum MacaronsEnum {
    Mango = "Mango",
    Caramel = "Caramel",
    Chocolate = "Chocolate"
}

export enum ZephyrEnum {
    Apple = "Apple",
    Currant = "Currant",
    Vanilla = "Vanilla"
}

export enum DrinksType {
    Cappucino = "Cappucino",
    Espresso = "Espresso",
    Lemonade = "Lemonade"
}

export enum DrinksSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}
