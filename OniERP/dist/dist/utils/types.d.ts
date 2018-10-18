export interface Dessert {
    type: DessertType;
    taste: string;
    size: string;
    quantity: number;
}
export interface Drink {
    id: DrinksType;
    size: string;
}
export interface Check {
    id: number;
    desserts: Array<Dessert>;
    drinks: Array<Drink>;
    isFinished: boolean;
    payment: Payment;
    type: OrderType;
}
export declare enum Payment {
    Card = "\u041A\u0430\u0440\u0442\u0430",
    Cash = "\u041D\u0430\u043B\u0438\u0447\u043A\u0430",
    Other = "\u0414\u0440\u0443\u0433\u043E\u0435",
}
export declare enum OrderType {
    PreOrder = "\u041F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437",
    Shop = "\u0412\u0438\u0442\u0440\u0438\u043D\u0430",
    Other = "\u0414\u0440\u0443\u0433\u043E\u0435",
}
export declare enum DessertType {
    Macaron = "\u041C\u0430\u043A\u0430\u0440\u043E\u043D\u0441",
    Zephyr = "\u0417\u0435\u0444\u0438\u0440",
    Cake = "\u0422\u043E\u0440\u0442",
}
export declare enum MacaronsEnum {
    DorBluePear = "\u0414\u043E\u0431-\u0411\u043B\u044E - \u0413\u0440\u0443\u0448\u0430",
    ParmesanFigue = "\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D - \u0418\u043D\u0436\u0438\u0440",
    StrawberryCheesecake = "\u041A\u043B\u0443\u0431\u043D\u0438\u0447\u043D\u044B\u0439 \u0427\u0438\u0437\u043A\u0435\u0439\u043A",
    Raspberry = "\u041C\u0430\u043B\u0438\u043D\u0430",
    CherryTonko = "\u0412\u0438\u0448\u043D\u044F - \u0411\u043E\u0431\u044B \u0422\u043E\u043D\u043A\u043E",
    Oblepiha = "\u041E\u0431\u043B\u0435\u043F\u0438\u0445\u0430",
    Currant = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430",
    LavenderBlackberry = "\u041B\u0430\u0432\u0430\u043D\u0434\u0430 - \u0427\u0435\u0440\u043D\u0438\u043A\u0430",
    MangoPassion = "\u041C\u0430\u043D\u0433\u043E - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F",
    CoffeeCaramel = "\u041A\u043E\u0444\u0435 - \u0421\u043E\u043B\u0451\u043D\u0430\u044F \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C",
    Chocolate = "\u0428\u043E\u043A\u043E\u043B\u0430\u0434",
    Pistachio = "\u0424\u0438\u0441\u0442\u0430\u0448\u043A\u0430",
    LimeBasil = "\u041B\u0430\u0439\u043C - \u0411\u0430\u0437\u0438\u043B\u0438\u043A",
}
export declare enum ZephyrEnum {
    Apple = "\u042F\u0431\u043B\u043E\u043A\u043E",
    ApricotPassionFruit = "\u0410\u0431\u0440\u0438\u043A\u043E\u0441 - \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F",
    Currant = "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430",
    StrawberryCranberry = "\u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430 - \u041A\u043B\u044E\u043A\u0432\u0430",
}
export declare enum CakesEnum {
    Rio = "Rio",
    CarrotCake = "Carrot Cake",
    Soul = "Soul",
    Pink = "Pink",
    Infinity = "Infinity",
}
export declare enum DrinksType {
    Cappucino = "\u041A\u0430\u043F\u0443\u0447\u0438\u043D\u043E",
    Latte = "\u041B\u0430\u0442\u0442\u0435",
    FlatWhite = "\u0424\u043B\u0435\u0442 \u0412\u0430\u0439\u0442",
    Raf = "\u0420\u0430\u0444",
    Americano = "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E",
    AmericanoMilk = "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E \u0441 \u043C\u043E\u043B\u043E\u043A\u043E\u043C",
    LongBlack = "\u041B\u043E\u043D\u0433 \u0431\u043B\u044D\u043A",
    Espresso = "\u042D\u0441\u043F\u0440\u0435\u0441\u0441\u043E",
    Doppio = "\u0414\u043E\u043F\u043F\u0438\u043E",
    Machiato = "\u041C\u0430\u043A\u0438\u0430\u0442\u043E",
    LatteLavender = "\u041B\u0430\u0442\u0442\u0435 \u041B\u0430\u0432\u0430\u043D\u0434\u0430",
    LatteCaramel = "\u041B\u0430\u0442\u0442\u0435 \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C",
    LatteOrange = "\u041B\u0430\u0442\u0442\u0435 \u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D",
    Cacao = "\u041A\u0430\u043A\u0430\u043E",
    TeaGreen = "\u0427\u0430\u0439 \u0417\u0435\u043B\u0451\u043D\u044B\u0439",
    TeaBlack = "\u0427\u0430\u0439 \u0427\u0451\u0440\u043D\u044B\u0439",
    TeaHerbal = "\u0427\u0430\u0439 \u0422\u0440\u0430\u0432\u044F\u043D\u043E\u0439",
    SpeacialTeaPearLime = "\u0427\u0430\u0439 \u0413\u0440\u0443\u0448\u0430-\u041B\u0430\u0439\u043C",
    SpecialTeaOrange = "\u0427\u0430\u0439 \u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D-\u041E\u0431\u043B\u0435\u043F\u0438\u0445\u0430",
    SpecialTeaGinger = "\u0427\u0430\u0439 \u041C\u0430\u043B\u0438\u043D\u0430-\u0418\u043C\u0431\u0438\u0440\u044C",
    HotChocolate = "\u0413\u0430\u0440\u044F\u0447\u0438\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
    LemonadeStrawberry = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430",
    LemonadeCitrus = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u0426\u0438\u0442\u0440\u0443\u0441",
    LemonadePassion = "\u041B\u0438\u043C\u043E\u043D\u0430\u0434 \u041C\u0430\u0440\u0430\u043A\u0443\u0439\u044F",
    IceLatte = "\u0410\u0439\u0441 \u041B\u0430\u0442\u0442\u0435",
    Syrop = "\u0421\u0438\u0440\u043E\u043F",
}
export declare enum PartnersEnum {
    CoffeeIs = "Coffee is",
    FirstPoint = "First Point",
    CubaCoffee = "Cuba Coffee",
    Progress = "Progress",
    KlassnaKava = "\u041A\u043B\u0430\u0441\u043D\u0430 \u043A\u0430\u0432\u0430",
    CoffeeAndTheCity = "Coffee and the city",
    IlMio = "Il Mio",
    StudioCoffee = "\u0421\u0442\u0443\u0434\u0438\u044F \u043A\u043E\u0444\u0435",
}
export declare enum ValueInputOption {
    INPUT_VALUE_OPTION_UNSPECIFIED = "INPUT_VALUE_OPTION_UNSPECIFIED",
    RAW = "RAW",
    USER_ENTERED = "USER_ENTERED",
}
export declare enum InsertDataOption {
    OVERWRITE = "OVERWRITE",
    INSERT_ROWS = "INSERT_ROWS",
}
export declare enum ValueRenderOption {
    FORMATTED_VALUE = "FORMATTED_VALUE",
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE",
    FORMULA = "FORMULA",
}
export declare enum DateTimeRenderOption {
    SERIAL_NUMBER = "SERIAL_NUMBER",
    FORMATTED_STRING = "FORMATTED_STRING",
}
