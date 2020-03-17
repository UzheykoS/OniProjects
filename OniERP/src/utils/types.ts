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
  staff?: Staff;
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
  Choux = 'Шу',
  Cheesecake = 'Чизкейк',
  Zephyr = 'Зефир',
  Dragee = 'Драже',
  Cake = 'Торт',
  SmallCake = 'Пирожное',
  IceCream = 'Мороженое',
  Sorbet = 'Сорбет',
  EasterCake = 'Кулич',
}

export enum SaleType {
  Empty = '0 %',
  Five = '5 %',
  Ten = '10 %',
  Twenty = '20 %',
  Fifty = '50 %',
  Staff = 'Персонал',
  Full = '100 %',
  NewYear2020 = 'Новый Год 2020',
}

export enum Staff {
  Veronica = 'Вероника',
  Zhenya = 'Женя',
  Lena = 'Лена',
  Miroslava = 'Мирослава',
  Julia = 'Юля',
  Margo = 'Марго',
  Nika = 'Ника',
  Ira = 'Ира',
}

export enum MacaronsEnum {
  CoffeeCaramel = 'Кофе - Солёная Карамель',
  LimeBasilic = 'Лайм - Базилик',
  YuzuBanana = 'Банан - Юзу',
  CherryBrandy = 'Вишня - Бренди',
  OrangeMilkChocolate = 'Апельсин - Молочный',
  DorBluePear = 'Доб-Блю - Груша',
  ParmesanFigue = 'Пармезан - Инжир',
  StrawberryCheesecake = 'Клубничный Чизкейк',
  GrapefruitRose = 'Грейпфрут - Роза',
  Raspberry = 'Малина',
  Currant = 'Смородина',
  MangoPassion = 'Манго - Маракуйя',
  Chocolate = 'Шоколад',
  Pistachio = 'Фисташка',
  LavenderBlackberry = 'Лаванда - Черника',
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
  Cake_2020 = '2020',
}

export enum ChouxEnum {
  SaltedCaramel = 'Солёная карамель',
  LemonStrawberry = 'Лимон - Клубника',
  VanillaPeach = 'Ваниль - Персик',
  ChocolateCherry = 'Шоколад - Вишня',
  CoconutMango = 'Манго - Кокос',
  PistachioOrange = 'Фисташка - Апельсин',
  RaspberryRose = 'Малина - Личи - Роза',
  FundukApricot = 'Фундук - Абрикос',
}

export enum CheesecakeEnum {
  Gorgonzola = 'Горгонзола - Айва',
  Vanilla = 'Ваниль - Карамель',
  Lemon = 'Лимон',
}

export enum IceCreamEnum {
  SaltedCaramel = 'Солёная карамель',
  Vanilla = 'Ваниль',
  WildStrawberry = 'Земляника',
  CherryMascarpone = 'Вишня - Маскарпоне',
  Pistachio = 'Фисташка',
  Chocolate = 'Шоколад',
  LemonMint = 'Лимон - Мята',
}

export enum SorbetEnum {
  Mango = 'Манго',
  AnanasCoconut = 'Ананас - Кокос',
  Orange = 'Апельсин',
  AvocadoKivi = 'Авокадо - Киви',
}

export enum EasterCakeEnum {
  Small = 'S 450 гр',
  Large = 'L 750 гр',
}

export enum SmallCakeEnum {
  Valentin = 'Валентинка',
}

export enum DrageeEnum {
  Nuts = 'Орехи',
  Fruits = 'Фрукты',
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
  Milk = 'Молоко',
  Cream = 'Сливки',
  Cup240 = 'Чашка 240мл',
  Cup355 = 'Чашка 355мл',
  Cup470 = 'Чашка 470мл',
}

export enum PartnersEnum {
  CoffeeIs = 'Coffee is',
  WCoffee = 'WCoffee',
  DoubleLab = 'Double Lab',
  GolodnaPtashka = 'Голодна пташка',
  GrayCafe = 'Gray Cafe',
  VsiSvoi = 'Всі Свої',
  LiaDezi = 'Lia Dezi',
  Parle = 'Parle',
  IlMio = 'Il Mio',
  CubaCoffee = 'Cuba Coffee',
  Progress = 'Progress',
  KlassnaKava = 'Класна кава',
  StudioCoffee = 'Студия кофе',
  Chicago44 = 'Чикаго 44',
  RedBerry = 'Red Berry',
  Crucobar = 'Crucobar',
  ProCoffeee = 'Pro Coffee',
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
  Irene = 'Ира',
  Julia = 'Юля',
  Nika = 'Ника',
}
