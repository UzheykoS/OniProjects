import React, { FunctionComponent, useState, useReducer } from 'react';
import { Wrap } from './styled';
import CardComponent from '@core/CardComponent';
import { DessertType } from '@utils/types';

interface IDessertTypesComponent {
  setType: (type: DessertType) => void;
}

const DessertTypesComponent: FunctionComponent<IDessertTypesComponent> = ({
  setType,
}) => {
  const onDessertTypeClick = (type: DessertType) => {
    setType(type);
  };

  const dessertKeys = Object.keys(DessertType);
  const dessertTypes = dessertKeys.map(d => {
    return {
      id: d,
      value: DessertType[d],
    };
  });

  return (
    <Wrap>
      {dessertTypes.map(taste => {
        return (
          <CardComponent
            key={taste.id}
            imageUrl='/images/desserts_icon.jpg'
            title={taste.value}
            onClick={() => onDessertTypeClick(taste.value)}
          />
        );
      })}
    </Wrap>
  );
};

export default DessertTypesComponent;
