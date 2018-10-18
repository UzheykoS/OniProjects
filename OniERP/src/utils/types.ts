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
    type: OrderType
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

export enum MacaronsEnum {
    DorBluePear = "Доб-Блю - Груша",
    ParmesanFigue = "Пармезан - Инжир",
    StrawberryCheesecake = "Клубничный Чизкейк",
    Raspberry = "Малина",
    CherryTonko = "Вишня - Бобы Тонко",
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
    Cappucino = "Капучино",
    Latte = "Латте",
    FlatWhite = "Флет Вайт",
    Raf = "Раф",
    Americano = "Американо",
    AmericanoMilk = "Американо с молоком",
    LongBlack = "Лонг блэк",
    Espresso = "Эспрессо",
    Doppio = "Доппио",    
    Machiato = "Макиато",
    LatteLavender = "Латте Лаванда",
    LatteCaramel = "Латте Карамель",
    LatteOrange = "Латте Апельсин",
    Cacao = "Какао",
    TeaGreen = "Чай Зелёный",
    TeaBlack = "Чай Чёрный",
    TeaHerbal = "Чай Травяной",
    SpeacialTeaPearLime = "Чай Груша-Лайм",
    SpecialTeaOrange = "Чай Апельсин-Облепиха",
    SpecialTeaGinger = "Чай Малина-Имбирь",
    HotChocolate = "Гарячий шоколад",
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
    StudioCoffee = "Студия кофе"
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
