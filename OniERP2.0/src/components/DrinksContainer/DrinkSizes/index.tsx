import React, { FunctionComponent } from 'react';
import { Wrap } from './styled';
import CardComponent from '@core/CardComponent';
import { DrinksType } from '@utils/types';
import { useStore } from '@hooks';
import { DrinksDict } from '@utils/dictionaries';

interface IDrinkSizesComponent {
  type: DrinksType;
  handleClose: () => void;
}

const DrinkSizesComponent: FunctionComponent<IDrinkSizesComponent> = ({
  type,
  handleClose,
}) => {
  const { app } = useStore();
  const drinkSizes = DrinksDict[type];

  const handleDrinkSizeOrQuantitySelect = size => {
    app.addDrink({
      type,
      size,
      quantity: 1,
    });
    handleClose();
  };

  return (
    <Wrap>
      {drinkSizes.map(size => {
        return (
          <CardComponent
            key={size}
            imageUrl='/images/drinks_icon.jpg'
            title={size}
            onClick={() => handleDrinkSizeOrQuantitySelect(size)}
          />
        );
      })}
    </Wrap>
  );
};

export default DrinkSizesComponent;
