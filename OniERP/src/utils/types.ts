import * as moment from 'moment';

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
  sale: SaleType;
  isPaid: boolean;
  date: moment.Moment;
}

export enum Payment {
  Card = 'Карта',
  Cash = 'Наличка',
  Terminal = 'Терминал',
  Other = 'Другое',
}

export enum OrderType {
  PreOrder = 'Предзаказ',
  Shop = 'Витрина',
  Other = 'Другое',
}

export enum DessertType {
  Macaron = 'Макаронс',
  Zephyr = 'Зефир',
  Cake = 'Торт',
  Choux = 'Шу',
  Cheesecake = 'Чизкейк',
  EasterCake = 'Кулич',
  IceCream = 'Мороженое'
}

export enum SaleType {
  Empty = '0 %',
  Five = '5 %',
  Ten = '10 %',
  Twenty = '20 %',
  Fourty = '40 %',
  Full = '100 %',
}

export enum MacaronsEnum {
  CoffeeCaramel = 'Кофе - Солёная Карамель',
  MandarinVanil = 'Мандарин - Ваниль',
  DorBluePear = 'Доб-Блю - Груша',
  ParmesanFigue = 'Пармезан - Инжир',
  StrawberryCheesecake = 'Клубничный Чизкейк',
  GrapefruitRose = 'Грейпфрут - Роза',
  Raspberry = 'Малина',
  CherryTonko = 'Вишня - Бобы Тонка',
  Oblepiha = 'Облепиха',
  Currant = 'Смородина',
  MangoPassion = 'Манго - Маракуйя',
  Chocolate = 'Шоколад',
  Pistachio = 'Фисташка',
  LavenderBlackberry = 'Лаванда - Черника',
  LimeBasil = 'Лайм - Базилик',
}

export enum ZephyrEnum {
  Apple = 'Яблоко',
  ApricotPassionFruit = 'Абрикос - Маракуйя',
  Currant = 'Смородина',
  StrawberryCranberry = 'Клубника - Клюква',
}

export enum CakesEnum {
  Rio = 'Rio',
  CarrotCake = 'Carrot Cake',
  Soul = 'Soul',
  Pink = 'Pink',
  Infinity = 'Infinity',
  Cake_2019 = '2019',
}

export enum ChouxEnum {
  SaltedCaramel = 'Солёная карамель',
  LemonStrawberry = 'Лимон - Клубника',
  VanillaPeach = 'Ваниль - Персик',
  ChocolateCherry = 'Шоколад - Вишня',
  CoconutMango = 'Манго - Кокос',
  PistachioOrange = 'Фисташка - Апельсин',
  RaspberryRose = 'Малина - Личи - Роза',
}

export enum CheesecakeEnum {
  Gorgonzola = 'Горгонзола - Айва',
  Vanilla = 'Ваниль - Карамель',
  Lemon = 'Лимон'
}

export enum IceCreamEnum {
  SaltedCaramel = 'Солёная карамель',
  Vanilla = 'Ваниль',
  WildStrawberry = 'Земляника',
  CherryMascarpone = 'Вишня - Маскарпоне',
  Pistachio = 'Фисташка'
}

export enum EasterCakeEnum {
  Small = 'S 450 гр',
  Large = 'L 750 гр',
}

export enum DrinksType {
  Cacao = 'Какао',
  Americano = 'Американо',
  AmericanoMilk = 'Американо с молоком',
  FilterCoffee = 'Фильтр',
  Cappucino = 'Капучино',
  FlatWhite = 'Флет Вайт',
  Raf = 'Раф',
  Latte = 'Латте',
  LatteLavender = 'Латте Лаванда',
  LatteCaramel = 'Латте Карамель',
  LatteOrange = 'Латте Апельсин',
  Espresso = 'Эспрессо',
  Doppio = 'Доппио',
  LongBlack = 'Лонг блэк',
  Machiato = 'Макиато',
  TeaGreen = 'Чай Зелёный',
  TeaBlack = 'Чай Чёрный',
  TeaHerbal = 'Чай Травяной',
  SpeacialTeaPearLime = 'Чай Груша-Лайм',
  SpecialTeaOrange = 'Чай Апельсин-Облепиха',
  SpecialTeaGinger = 'Чай Малина-Имбирь',
  HotChocolate = 'Горячий шоколад',
  LemonadeStrawberry = 'Лимонад Грейпфрут - Клубника - Мята',
  LemonadeAnanas = 'Лимонад Ананас - Базилик - Огурец',
  LemonadeMango = 'Лимонад Манго - Лемонграсс',
  IceLatte = 'Айс Латте',
  EspressoTonic = 'Эспрессо Тоник',
  Syrop = 'Сироп',
  VeganMilk = 'Молоко растительное',
}

export enum PartnersEnum {
  CoffeeIs = 'Coffee is',
  FirstPoint = 'First Point',
  CubaCoffee = 'Cuba Coffee',
  Progress = 'Progress',
  KlassnaKava = 'Класна кава',
  IlMio = 'Il Mio',
  StudioCoffee = 'Студия кофе',
  Ptaha = 'Ptaha',
  StarKava = 'StarKава',
  Parle = 'Parle',
  LiaDezi = 'Lia Dezi',
  Journalist = 'Журналист',
  Biblecoffee = 'Biblecoffee',
  Other = 'Другое',
}

export enum ValueInputOption {
  INPUT_VALUE_OPTION_UNSPECIFIED = 'INPUT_VALUE_OPTION_UNSPECIFIED',
  RAW = 'RAW',
  USER_ENTERED = 'USER_ENTERED',
}

export enum InsertDataOption {
  OVERWRITE = 'OVERWRITE',
  INSERT_ROWS = 'INSERT_ROWS',
}

export enum ValueRenderOption {
  FORMATTED_VALUE = 'FORMATTED_VALUE',
  UNFORMATTED_VALUE = 'UNFORMATTED_VALUE',
  FORMULA = 'FORMULA',
}

export enum DateTimeRenderOption {
  SERIAL_NUMBER = 'SERIAL_NUMBER',
  FORMATTED_STRING = 'FORMATTED_STRING',
}

export const MIX_MACARONS_6 = 'Набор на 6 шт.';
export const MIX_MACARONS_12 = 'Набор на 12 шт.';
export const MIX_MACARONS_24 = 'Набор на 24 шт.';

export const MIX_ZEPHYR_8 = 'Набор на 8 шт.';
export const MIX_ZEPHYR_16 = 'Набор на 16 шт.';

export enum PaymentTypeEnum {
  Package = 'Упаковка',
  Household = 'Коммуналка',
  Suppliers = 'Поставщики',
  Delivery = 'Доставка',
  Other = 'Другое',
  Collection = 'Инкассация',
  Salary = 'Зарплата',
}

export enum ProfilesEnum {
  Alina = 'Алина',
  Irene = 'Ира',
  Julia = 'Юля',
}
