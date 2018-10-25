export interface Dessert {
    type: DessertType,
    taste: string,
    size: string
    quantity: number;
}

export interface Drink {
    id: DrinksType,
    size: string
}

export interface Check {
    id: number,
    desserts: Array<Dessert>,
    drinks: Array<Drink>,
    isFinished: boolean,
    payment: Payment,
    type: OrderType,
    sale: SaleType
}

export enum Payment {
    Card = 'Карта',
    Cash = 'Наличка',
    Other = 'Другое'
}

export enum OrderType {
    PreOrder = 'Предзаказ',
    Shop = 'Витрина',
    Other = 'Другое'
}

export enum DessertType {
    Macaron = 'Макаронс',
    Zephyr = 'Зефир',
    Cake = 'Торт'
}

export enum SaleType {
    Empty = '0 %',
    Ten = '10 %',
    Twenty = '20 %',
    Fourty = '40 %',
    Full = '100 %'
}

export enum MacaronsEnum {
    DorBluePear = "Доб-Блю - Груша",
    ParmesanFigue = "Пармезан - Инжир",
    StrawberryCheesecake = "Клубничный Чизкейк",
    Raspberry = "Малина",
    CherryTonko = "Вишня - Бобы Тонка",
    Oblepiha = "Облепиха",
    Currant = "Смородина",
    LavenderBlackberry = "Лаванда - Черника",
    MangoPassion = "Манго - Маракуйя",
    CoffeeCaramel = "Кофе - Солёная Карамель",
    Chocolate = "Шоколад",
    Pistachio = "Фисташка",
    LimeBasil = "Лайм - Базилик" 
}

export enum ZephyrEnum {
    Apple = "Яблоко",
    ApricotPassionFruit = "Абрикос - Маракуйя",
    Currant = "Смородина",    
    StrawberryCranberry = "Клубника - Клюква"
}

export enum CakesEnum {
    Rio = "Rio",
    CarrotCake = "Carrot Cake",
    Soul = "Soul",
    Pink = "Pink",
    Infinity = "Infinity"
}

export enum DrinksType {
    Cacao = "Какао",
    Americano = "Американо",
    AmericanoMilk = "Американо с молоком",
    Cappucino = "Капучино",
    FlatWhite = "Флет Вайт",
    Latte = "Латте",
    Raf = "Раф",
    LatteLavender = "Латте Лаванда",
    LatteCaramel = "Латте Карамель",
    LatteOrange = "Латте Апельсин",
    Espresso = "Эспрессо",
    Doppio = "Доппио",
    LongBlack = "Лонг блэк",
    Machiato = "Макиато",
    TeaGreen = "Чай Зелёный",
    TeaBlack = "Чай Чёрный",
    TeaHerbal = "Чай Травяной",
    SpeacialTeaPearLime = "Чай Груша-Лайм",
    SpecialTeaOrange = "Чай Апельсин-Облепиха",
    SpecialTeaGinger = "Чай Малина-Имбирь",
    HotChocolate = "Горячий шоколад",
    LemonadeStrawberry = "Лимонад Клубника",
    LemonadeCitrus = "Лимонад Цитрус",
    LemonadePassion = "Лимонад Маракуйя",
    IceLatte = "Айс Латте",
    Syrop = "Сироп"
}

export enum PartnersEnum {
    CoffeeIs = "Coffee is",
    FirstPoint = "First Point",
    CubaCoffee = "Cuba Coffee",
    Progress = "Progress",
    KlassnaKava = "Класна кава",
    CoffeeAndTheCity = "Coffee and the city",
    IlMio = "Il Mio",
    StudioCoffee = "Студия кофе",
    Other = "Другое"
}

export enum ValueInputOption {
    INPUT_VALUE_OPTION_UNSPECIFIED = 'INPUT_VALUE_OPTION_UNSPECIFIED',
    RAW = 'RAW',
    USER_ENTERED = 'USER_ENTERED'
}

export enum InsertDataOption {
    OVERWRITE = 'OVERWRITE',
    INSERT_ROWS = 'INSERT_ROWS'
}

export enum ValueRenderOption {
    FORMATTED_VALUE = 'FORMATTED_VALUE',
    UNFORMATTED_VALUE = 'UNFORMATTED_VALUE',
    FORMULA = 'FORMULA'
}

export enum DateTimeRenderOption {
    SERIAL_NUMBER = 'SERIAL_NUMBER',
    FORMATTED_STRING = 'FORMATTED_STRING'
}

export const MIX_MACARONS_6 = 'Набор на 6 шт.';
export const MIX_MACARONS_12 = 'Набор на 12 шт.';
export const MIX_MACARONS_24 = 'Набор на 24 шт.';

export const MIX_ZEPHYR_8 = 'Набор на 8 шт.';
export const MIX_ZEPHYR_16 = 'Набор на 16 шт.';

export enum PaymentTypeEnum {
    Package = "Упаковка",
    Household = "Коммуналка",
    Suppliers = "Поставщики",
    Delivery = "Доставка",
    Other = "Другое"
}
