import React, { FunctionComponent, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DrinksType } from '@utils/types';
import { useStore } from '@hooks';
import { getSnapshot, Instance } from 'mobx-state-tree';
import { CheckModel } from '@models/app.store';
import { observer } from 'mobx-react-lite';
import { ButtonsContainer } from './styled';
import { Button } from '@material-ui/core';
import DrinkTypes from './DrinkTypes';
import DrinkSizes from './DrinkSizes';

export interface IDrinksContainerProps {
  handleClose: () => void;
}

const DrinksContainer: FunctionComponent<IDrinksContainerProps> = ({
  handleClose,
}) => {
  const { app } = useStore();
  if (!app || !app.check) {
    return null;
  }
  const [type, setType] = useState<DrinksType | null>(null);
  const check = getSnapshot<Instance<typeof CheckModel>>(app.check);

  const handleBackClick = () => {
    if (type) {
      setType(null);
    } else {
      handleClose();
    }
  };

  return (
    <Dialog onClose={() => {}} open fullScreen>
      <DialogTitle>
        {!type
          ? `Выберите напиток (${app.totalDrinksQuantity})`
          : 'Выберите размер'}
      </DialogTitle>
      <ButtonsContainer>
        <Button variant='contained' color='primary' onClick={handleBackClick}>
          Назад
        </Button>
        <Button variant='contained' color='secondary' onClick={handleClose}>
          Готово
        </Button>
      </ButtonsContainer>
      {!type ? (
        <DrinkTypes setType={setType} />
      ) : (
        <DrinkSizes type={type} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

export default observer(DrinksContainer);
