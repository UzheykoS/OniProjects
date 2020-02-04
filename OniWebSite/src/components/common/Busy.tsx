import { GridLoader } from 'react-spinners';
import React from 'react';

interface IBusyProps {
  loading: boolean;
}

export const Busy: React.SFC<IBusyProps> = props => {
  return (
    <div className={'busy-container' + (props.loading ? '' : ' invisible')}>
      <div className='busy'>
        <GridLoader color={'#d0006f'} loading={props.loading} />
      </div>
    </div>
  );
};
