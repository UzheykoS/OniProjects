import React, { FunctionComponent, useState, useReducer } from 'react';
import { Wrap } from './styled';
import CardComponent from '@core/CardComponent';
import { DrinksType } from '@utils/types';

interface IDrinkTypesComponent {
  setType: (type: DrinksType) => void;
}

const DrinkTypesComponent: FunctionComponent<IDrinkTypesComponent> = ({
  setType,
}) => {
  const onDrinkTypeClick = (type: DrinksType) => {
    setType(type);
  };

  const drinkKeys = Object.keys(DrinksType);
  const drinkTypes = drinkKeys.map(d => {
    return {
      id: d,
      value: DrinksType[d],
    };
  });

  return (
    <Wrap>
      {drinkTypes.map(d => {
        return (
          <CardComponent
            key={d.id}
            imageUrl='/images/drinks_icon.jpg'
            title={d.value}
            onClick={() => onDrinkTypeClick(d.value)}
          />
        );
      })}
    </Wrap>
  );
};

export default DrinkTypesComponent;
