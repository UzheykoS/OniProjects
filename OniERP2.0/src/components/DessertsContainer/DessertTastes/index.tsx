import React, { FunctionComponent } from 'react';
import { Wrap } from './styled';
import CardComponent from '@core/CardComponent';
import {
  DessertType,
  CakesEnum,
  MacaronsEnum,
  MIX_MACARONS_6,
  MIX_MACARONS_12,
  MIX_MACARONS_24,
  ZephyrEnum,
  MIX_ZEPHYR_8,
  MIX_ZEPHYR_16,
  ChouxEnum,
  CheesecakeEnum,
} from '@utils/types';
import Helper from '@utils/helper';
import { Instance } from 'mobx-state-tree';
import { CheckModel } from '@models/app.store';
import { useStore } from '@hooks';

interface IDessertTastesComponent {
  type: DessertType;
  check: Instance<typeof CheckModel>;
  setTaste: (taste: string) => void;
}

interface IDessertTastesItem {
  value: string;
  id: string;
}

interface IExtraDessertOptionItem {
  value: string;
  avatar: number;
}

const DessertTastesComponent: FunctionComponent<IDessertTastesComponent> = ({
  type,
  check,
  setTaste,
}) => {
  const { app } = useStore();

  const onDessertTasteClick = taste => {
    if (type === DessertType.Cake) {
      setTaste(taste);
    } else {
      const dessert = check.desserts.find(
        d => d.type === type && d.taste === taste
      );
      if (dessert) {
        app.addDessert({ ...dessert, quantity: undefined } as any);
      } else {
        app.addDessert({
          type: type!,
          taste,
          quantity: 1,
          size: '',
        });
      }
    }
  };

  const onDessertTasteDecrease = taste => {
    const dessert = check.desserts.find(
      d => d.type === type && d.taste === taste
    );
    if (dessert) {
      app.removeDessertItem(dessert as any);
    }
  };

  const handleDessertMixSelect = async mixType => {
    switch (mixType) {
      case MIX_MACARONS_6:
        app.addDessert({
          type: type!,
          taste: mixType,
          quantity: 6,
          size: '',
        });
        break;
      case MIX_MACARONS_12:
        app.addDessert({
          type: type!,
          taste: mixType,
          quantity: 12,
          size: '',
        });
        break;
      case MIX_MACARONS_24:
        app.addDessert({
          type: type!,
          taste: mixType,
          quantity: 24,
          size: '',
        });
        break;
      case MIX_ZEPHYR_8:
        app.addDessert({
          type: type!,
          taste: mixType,
          quantity: 8,
          size: '',
        });
        break;
      case MIX_ZEPHYR_16:
        app.addDessert({
          type: type!,
          taste: mixType,
          quantity: 16,
          size: '',
        });
        break;
      default:
        break;
    }
  };

  const handleDessertMixDecrease = mixType => {
    switch (mixType) {
      case MIX_MACARONS_6:
        app.removeDessertItem({
          type: type!,
          taste: mixType,
          quantity: 6,
          size: '',
        });
        break;
      case MIX_MACARONS_12:
        app.removeDessertItem({
          type: type!,
          taste: mixType,
          quantity: 12,
          size: '',
        });
        break;
      case MIX_MACARONS_24:
        app.removeDessertItem({
          type: type!,
          taste: mixType,
          quantity: 24,
          size: '',
        });
        break;
      case MIX_ZEPHYR_8:
        app.removeDessertItem({
          type: type!,
          taste: mixType,
          quantity: 8,
          size: '',
        });
        break;
      case MIX_ZEPHYR_16:
        app.removeDessertItem({
          type: type!,
          taste: mixType,
          quantity: 16,
          size: '',
        });
        break;
      default:
        break;
    }
  };

  let dessertTastes: Array<IDessertTastesItem> = [];
  const extraOptions: Array<IExtraDessertOptionItem> = [];

  switch (type) {
    case DessertType.Cake:
      dessertTastes = Helper.getArrayFromEnum(CakesEnum);
      break;
    case DessertType.Macaron:
      dessertTastes = Helper.getArrayFromEnum(MacaronsEnum);
      extraOptions.push({
        value: MIX_MACARONS_6,
        avatar: 6,
      });
      extraOptions.push({
        value: MIX_MACARONS_12,
        avatar: 12,
      });
      extraOptions.push({
        value: MIX_MACARONS_24,
        avatar: 24,
      });
      break;
    case DessertType.Zephyr:
      dessertTastes = Helper.getArrayFromEnum(ZephyrEnum);
      extraOptions.push({
        value: MIX_ZEPHYR_8,
        avatar: 8,
      });
      extraOptions.push({
        value: MIX_ZEPHYR_16,
        avatar: 16,
      });
      break;
    case DessertType.Choux:
      dessertTastes = Helper.getArrayFromEnum(ChouxEnum);
      break;
    case DessertType.Cheesecake:
      dessertTastes = Helper.getArrayFromEnum(CheesecakeEnum);
      break;
    default:
      dessertTastes = [];
      break;
  }

  return (
    <Wrap>
      {dessertTastes.map(taste => {
        return (
          <CardComponent
            key={taste.id}
            imageUrl='/images/macaron.jpg'
            title={taste.value}
            onClick={() => onDessertTasteClick(taste.value)}
            count={app.dessertQuantity(type, taste.value)}
            decreaseCount={() => onDessertTasteDecrease(taste.value)}
          />
        );
      })}
      {extraOptions.map(o => {
        return (
          <CardComponent
            key={o.value}
            imageUrl='/images/macaron.jpg'
            title={o.value}
            onClick={() => handleDessertMixSelect(o.value)}
            count={app.dessertQuantity(type, o.value)}
            decreaseCount={() => handleDessertMixDecrease(o.value)}
          />
        );
      })}
    </Wrap>
  );
};

export default DessertTastesComponent;
