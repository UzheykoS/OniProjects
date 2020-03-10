import React, { FunctionComponent, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DessertType } from '@utils/types';
import { useStore } from '@hooks';
import { getSnapshot, Instance } from 'mobx-state-tree';
import { CheckModel } from '@models/app.store';
import { observer } from 'mobx-react-lite';
import DessertTypes from './DessertTypes';
import DessertTastes from './DessertTastes';
import DessertSizes from './DessertSizes';
import { ButtonsContainer } from './styled';
import { Button } from '@material-ui/core';

export interface IDessertsContainerProps {
  handleClose: () => void;
}

const DessertsContainer: FunctionComponent<IDessertsContainerProps> = ({
  handleClose,
}) => {
  const { app } = useStore();
  if (!app || !app.check) {
    return null;
  }
  const [type, setType] = useState<DessertType | null>(null);
  const [taste, setTaste] = useState<string>('');
  const check = getSnapshot<Instance<typeof CheckModel>>(app.check);

  const handleBackClick = () => {
    if (type && taste) {
      setTaste('');
    } else if (type) {
      setType(null);
    } else {
      handleClose();
    }
  };

  return (
    <Dialog onClose={() => {}} open fullScreen>
      <DialogTitle>
        {!type
          ? 'Выберите десерт'
          : !taste
          ? `Выберите вкус (${app.totalDessertQuantity})`
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
        <DessertTypes setType={setType} />
      ) : !taste ? (
        <DessertTastes check={check} type={type} setTaste={setTaste}/>
      ) : (
        <DessertSizes type={type} taste={taste} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

export default observer(DessertsContainer);
