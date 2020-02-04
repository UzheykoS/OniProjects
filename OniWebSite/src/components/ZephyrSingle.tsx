import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface IZephyrSingleProps {
  name: string;
  fullDescription: string;
  imageOnTheLeft: boolean;
  imageUrl: string;
}

export function ZephyrSingle({
  name,
  fullDescription,
  imageOnTheLeft,
  imageUrl,
}: IZephyrSingleProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  if (imageOnTheLeft) {
    return (
      <div>
        {isTabletOrMobile ? (
          <div className='row'>
            <div className='col-md-6'>
              <div className='zephyr-image-container'>
                <img src={imageUrl} />
              </div>
            </div>
            <div className='col-md-5'>
              <div
                className='zephyr-desc-container'
                style={{ textAlign: 'center' }}
              >
                <div className='taste-name'>{name}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        ) : (
          <div className='row'>
            <div className='col-md-6'>
              <div className='zephyr-image-container'>
                <img src={imageUrl} />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='zephyr-desc-container'>
                <div className='taste-name'>{name}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {isTabletOrMobile ? (
          <div className='row'>
            <div className='col-md-6'>
              <div className='zephyr-image-container'>
                <img src={imageUrl} />
              </div>
            </div>
            <div className='col-md-5'>
              <div
                className='zephyr-desc-container'
                style={{ textAlign: 'center' }}
              >
                <div className='taste-name'>{name}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        ) : (
          <div className='row'>
            <div className='col-md-5'>
              <div
                className='zephyr-desc-container'
                style={{ textAlign: 'right' }}
              >
                <div className='taste-name'>{name}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='zephyr-image-container'>
                <img src={imageUrl} />
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        )}
      </div>
    );
  }
}
