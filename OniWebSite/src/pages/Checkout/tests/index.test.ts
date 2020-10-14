import { formatMessage } from '@utils/Helper';
import { oneClickOrderItems } from './one-click-order-snapshots';
import { orderItems } from './order-snapshots';

describe('Helper', () => {
  it('should format message correctly', () => {
    const result = formatMessage(orderItems);
    expect(result).toMatchInlineSnapshot(`
      "Торт:  Pink - 1 шт. 
      Макарон: Набор на 6 шт - 1 шт. (Ассорти)
      Макарон: Набор на 6 шт - 1 шт. (Шоколад, Лаванда-Черника, Дор Блю-Груша, Пармезан-Инжир, Лаванда-Черника, Апельсин-Молочный шоколад)
      Шу: Набор на 2 шт - 1 шт. (Ассорти)
      Зефир: Набор на 16 шт - 1 шт. (Ассорти)
      Чизкейк:  Ваниль-Карамель - 1 шт. 
      Торт:  Soul XL - 2 шт. 
      "
    `);
  });

  it('should format one-click order message correctly', () => {
    const result = formatMessage(oneClickOrderItems);
    expect(result).toMatchInlineSnapshot(`
      "Макарон: Набор на 6 шт - 1 шт. (Лайм - Базилик, Лайм - Базилик, Грейпфрут-Роза, Дор Блю-Груша, Банан-Юзу, Фисташка)
      Макарон: Набор на 12 шт - 1 шт. (Ассорти)
      Шу: Набор на 4 шт - 1 шт. (Лимон-Клубника, Фундук-Абрикос, Ваниль-Персик, Солёная карамель)
      Шу: Набор на 2 шт - 1 шт. (Ассорти)
      Зефир: Набор на 16 шт - 1 шт. (Ассорти)
      Зефир: Набор на 8 шт - 1 шт. (Смородина, Клубника-Клюква, Клубника-Клюква, Клубника-Клюква, Абрикос-Маракуйя, Клубника-Клюква, Абрикос-Маракуйя, Смородина)
      Чизкейк:  Горгонзола-Айва - 1 шт. 
      Торт:  Soul - 1 шт. 
      Торт:  Carrot Cake XL - 2 шт. 
      "
    `);
  });
});
