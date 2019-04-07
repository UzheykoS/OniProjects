import React, { FunctionComponent } from 'react';
import { Wrap } from './styled';
import CardComponent from '@core/CardComponent';
import { DessertType } from '@utils/types';
import { useStore } from '@hooks';
import { DessertsDict } from '@utils/dictionaries';

interface IDessertSizesComponent {
  type: DessertType;
  taste: string;
  handleClose: () => void;
}

const DessertSizesComponent: FunctionComponent<IDessertSizesComponent> = ({
  type,
  taste,
  handleClose,
}) => {
  const { app } = useStore();
  const dessertSizes = DessertsDict[type];

  const handleDessertSizeOrQuantitySelect = size => {
    app.addDessert({
      type,
      taste,
      size,
      quantity: 1,
    });
    handleClose();
  };

  return (
    <Wrap>
      {dessertSizes.map(size => {
        return (
          <CardComponent
            key={size}
            imageUrl='/images/desserts_icon.jpg'
            title={size}
            onClick={() => handleDessertSizeOrQuantitySelect(size)}
          />
        );
      })}
    </Wrap>
  );
};

export default DessertSizesComponent;
