import {
  DrinksType,
  DessertType,
  MacaronsEnum,
  ZephyrEnum,
  PartnersEnum,
  CakesEnum,
} from './types';

export const DrinksDict: { [id: string]: Array<string> } = {};
DrinksDict[DrinksType.Cappucino] = ['175 мл', '340 мл'];
DrinksDict[DrinksType.Latte] = ['250 мл', '340 мл', '400 мл'];
DrinksDict[DrinksType.FlatWhite] = ['175 мл'];
DrinksDict[DrinksType.Raf] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.Americano] = ['120 мл', '200 мл'];
DrinksDict[DrinksType.AmericanoMilk] = ['120 мл', '200 мл'];
DrinksDict[DrinksType.Espresso] = ['30 мл'];
DrinksDict[DrinksType.Doppio] = ['60 мл'];
DrinksDict[DrinksType.Matcha] = ['Матча Чай', 'Матча Латте', 'Матча Тоник'];
DrinksDict[DrinksType.Machiato] = ['90 мл'];
DrinksDict[DrinksType.Cacao] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.Tea] = [
  'Зелёный',
  'Чёрный',
  'Травяной',
  'Груша-Лайм',
  'Апельсин-Облепиха',
  'Малина-Имбирь',
];
DrinksDict[DrinksType.HotChocolate] = ['175 мл'];
DrinksDict[DrinksType.Lemonade] = [
  'Клубника - Грейпфрут - Мята',
  'Ананас - Огурец - Базилик',
  'Манго - Лемонграсс',
];
DrinksDict[DrinksType.IceLatte] = ['400 мл'];
DrinksDict[DrinksType.EspressoTonic] = ['200 мл'];
DrinksDict[DrinksType.ColdBrew] = ['200 мл'];
DrinksDict[DrinksType.AddCaramel] = ['0 мл'];
DrinksDict[DrinksType.AddLavender] = ['0 мл'];
DrinksDict[DrinksType.AddOrange] = ['0 мл'];
DrinksDict[DrinksType.FilterCoffee] = ['200 мл'];
DrinksDict[DrinksType.VeganMilk] = ['М'];
DrinksDict[DrinksType.Milk] = ['N'];
DrinksDict[DrinksType.Cream] = ['N'];
DrinksDict[DrinksType.StojoCup] = ['240 мл', '355 мл', '470мл'];
DrinksDict[DrinksType.Seeds50] = ['50 гр'];

export const DessertsDict: { [id: string]: Array<any> } = {};
DessertsDict[DessertType.Macaron] = [1, 6, 12, 24];
DessertsDict[DessertType.Zephyr] = [1, 8, 16];
DessertsDict[DessertType.Cake] = ['18 см', '22 см'];

export const DrinkPricesDict: { [id: string]: Array<number> } = {};
DrinkPricesDict[DrinksType.Cappucino] = [25, 40];
DrinkPricesDict[DrinksType.Latte] = [28, 35, 45];
DrinkPricesDict[DrinksType.FlatWhite] = [35];
DrinkPricesDict[DrinksType.Raf] = [38, 45];
DrinkPricesDict[DrinksType.Americano] = [20, 30];
DrinkPricesDict[DrinksType.AmericanoMilk] = [22, 32];
DrinkPricesDict[DrinksType.Espresso] = [20];
DrinkPricesDict[DrinksType.Doppio] = [30];
DrinkPricesDict[DrinksType.Matcha] = [45, 55, 65];
DrinkPricesDict[DrinksType.Machiato] = [22];
DrinkPricesDict[DrinksType.Cacao] = [28, 35];
DrinkPricesDict[DrinksType.Tea] = [25, 25, 25, 35, 35, 35];
DrinkPricesDict[DrinksType.HotChocolate] = [55];
DrinkPricesDict[DrinksType.Lemonade] = [45, 45, 45];
DrinkPricesDict[DrinksType.IceLatte] = [45];
DrinkPricesDict[DrinksType.EspressoTonic] = [45];
DrinkPricesDict[DrinksType.ColdBrew] = [40];
DrinkPricesDict[DrinksType.AddCaramel] = [5];
DrinkPricesDict[DrinksType.AddLavender] = [5];
DrinkPricesDict[DrinksType.AddOrange] = [5];
DrinkPricesDict[DrinksType.FilterCoffee] = [30];
DrinkPricesDict[DrinksType.VeganMilk] = [25];
DrinkPricesDict[DrinksType.Milk] = [5];
DrinkPricesDict[DrinksType.Cream] = [10];
DrinkPricesDict[DrinksType.StojoCup] = [450, 550, 650];
DrinkPricesDict[DrinksType.Seeds50] = [40];

export const CaffeePrices: { [id: string]: number } = {};
CaffeePrices[PartnersEnum.CoffeeIs] = 18;
CaffeePrices[PartnersEnum.WCoffee] = 22;
CaffeePrices[PartnersEnum.DoubleLab] = 22;
CaffeePrices[PartnersEnum.GolodnaPtashka] = 22;
CaffeePrices[PartnersEnum.GrayCafe] = 22;
CaffeePrices[PartnersEnum.VsiSvoi] = 22;
CaffeePrices[PartnersEnum.LiaDezi] = 22;
CaffeePrices[PartnersEnum.Parle] = 22;
CaffeePrices[PartnersEnum.IlMio] = 22;
CaffeePrices[PartnersEnum.CubaCoffee] = 22;
CaffeePrices[PartnersEnum.Progress] = 22;
CaffeePrices[PartnersEnum.KlassnaKava] = 22;
CaffeePrices[PartnersEnum.StudioCoffee] = 22;
CaffeePrices[PartnersEnum.Chicago44] = 22;
CaffeePrices[PartnersEnum.RedBerry] = 22;
CaffeePrices[PartnersEnum.Crucobar] = 22;
CaffeePrices[PartnersEnum.ProCoffeee] = 22;

export const CakesPricesDict: { [id: string]: Array<number> } = {};
CakesPricesDict[CakesEnum.CarrotCake] = [650, 980];
CakesPricesDict[CakesEnum.Pink] = [630, 970];
CakesPricesDict[CakesEnum.Infinity] = [640, 970];
CakesPricesDict[CakesEnum.Rio] = [620, 960];
CakesPricesDict[CakesEnum.Soul] = [620, 960];
CakesPricesDict[CakesEnum.Cake_2020] = [690];

export const EasterCakesPrices = [280, 360];

export const ZEPHYR_PRICE = 16;
export const ZEPHYR_PARTNERS_PRICE = 12;

export const MACARONS_PRICE = 30;

export const CHOUX_PRICE = 45;

export const CHEESECAKE_PRICE = 75;

export const ICE_CREAM_PRICE = 55;

export const SORBET_PRICE = 55;

export const SMALL_CAKE_PRICE = 85;

export const DRAGEE_PRICE = 180;

export const MacaronsColors: { [id: string]: string } = {};
MacaronsColors[MacaronsEnum.DorBluePear] = '#b7e4f7';
MacaronsColors[MacaronsEnum.ParmesanFigue] = '#fcf7e8';
MacaronsColors[MacaronsEnum.StrawberryCheesecake] = '#ffdddd';
MacaronsColors[MacaronsEnum.Raspberry] = '#ffa5cf';
MacaronsColors[MacaronsEnum.CherryBrandy] = '#B21E27';
MacaronsColors[MacaronsEnum.YuzuBanana] = '#F0C130';
MacaronsColors[MacaronsEnum.Currant] = '#bc45c6';
MacaronsColors[MacaronsEnum.LavenderBlackberry] = '#b587ff';
MacaronsColors[MacaronsEnum.MangoPassion] = '#ffdd87';
MacaronsColors[MacaronsEnum.CoffeeCaramel] = '#a87301';
MacaronsColors[MacaronsEnum.Chocolate] = '#853c13';
MacaronsColors[MacaronsEnum.Pistachio] = '#85dd93';
MacaronsColors[MacaronsEnum.OrangeMilkChocolate] = '#FF8200';
MacaronsColors[MacaronsEnum.GrapefruitRose] = '#CB5382';

export const ZephyrColors: { [id: string]: string } = {};
ZephyrColors[ZephyrEnum.Apple] = '#fffbf2';
ZephyrColors[ZephyrEnum.ApricotPassionFruit] = '#ffe6bf';
ZephyrColors[ZephyrEnum.Currant] = '#d978еd';
ZephyrColors[ZephyrEnum.StrawberryCranberry] = '#f497b9';

export const DATE_FORMAT = 'DD.MM.YYYY HH:mm';

export const DATE_FORMAT_SHORT = 'YYYY-MM-DD';
