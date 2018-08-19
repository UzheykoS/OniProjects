export interface Dessert {
    id: number,
    type: DessertType,
    taste: string,
    size: string
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
    Macaron = 'Макаронс',
    Zephyr = 'Зефир',
    Cake = 'Торт'
}

export enum MacaronsEnum {
    Chocolate = "Шоколад",
    CoffeeCaramel = "Кофе - Солёная Карамель",
    MangoPassion = "Манго - Маракуйя",
    LimeBasil = "Лайм - Базилик",
    Pistachio = "Фисташка",
    DorBluePear = "Доб-Блю - Груша",
    LavenderBlackberry = "Лаванда - Черника",
    Currant = "Смородина",
    StrawberryCheesecake = "Клубничный Чизкейк",
    ParmesanFigue = "Пармезан - Инжир"
}

export enum ZephyrEnum {
    Apple = "Яблоко",
    Currant = "Смородина",
    ApricotPassionFruit = "Абрикос - Маракуйя",
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
    Espresso = "Эспрессо",
    Doppio = "Доппио",
    Americano = "Американо",
    AmericanoMilk = "Американо с молоком",
    Machiato = "Макиато",
    Cappucino = "Капучино",
    FlatWhite = "Флет Вайт",
    Latte = "Латте",
    LatteLavender = "Латте Лаванда",
    Raf = "Раф",
    RafCitrus = "Раф Цитрус",
    TeaGreen = "Чай Зелёный",
    TeaBlack = "Чай Чёрный",
    TeaHerbal = "Чай Травяной",
    SpeacialTeaPearLime = "Чай Груша-Лайм",
    SpecialTeaOrange = "Чай Апельсин-Облепиха",
    Cacao = "Какао",
    HotChocolate = "Гарячий шоколад",
    LemonadeStrawberry = "Лимонад Клубника",
    LemonadeCitrus = "Лимонад Цитрус",
    LemonadePassion = "Лимонад Маракуйя",
    IceLatte = "Айс Латте",
    Syrop = "Сироп"
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
