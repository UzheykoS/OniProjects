import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface IMacaronSingleProps {
  name: string;
  shortDescription: string;
  fullDescription: string;
  imageOnTheLeft: boolean;
  imageUrl: string;
  hoverImageUrl: string;
}

export function MacaronSingle({
  name,
  shortDescription,
  fullDescription,
  imageOnTheLeft,
  imageUrl,
  hoverImageUrl,
}: IMacaronSingleProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setTimeout(() => {
      setMouseOver(true);
    }, 100);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  if (imageOnTheLeft) {
    return (
      <div>
        {isTabletOrMobile ? (
          <div className='row'>
            <div className='col-md-4'>
              <div className='macaron-image-container'>
                <img src={imageUrl} />
              </div>
            </div>
            <div className='col-md-7'>
              <div
                className='macaron-desc-container'
                style={{ textAlign: 'center' }}
              >
                <div className='taste-name'>{name}</div>
                <div className='taste-desc'>{shortDescription}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        ) : (
          <div className='row'>
            <div className='col-md-4'>
              <div className='macaron-image-container'>
                <img
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  src={mouseOver ? hoverImageUrl : imageUrl}
                />
                <img className='taste bottom' src={hoverImageUrl} />
                <img className='taste top' src={imageUrl} />
              </div>
            </div>
            <div className='col-md-7'>
              <div className='macaron-desc-container'>
                <div className='taste-name'>{name}</div>
                <div className='taste-desc'>{shortDescription}</div>
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
            <div className='col-md-4'>
              <div className='macaron-image-container'>
                <img src={imageUrl} />
              </div>
            </div>
            <div className='col-md-7'>
              <div
                className='macaron-desc-container'
                style={{ textAlign: 'center' }}
              >
                <div className='taste-name'>{name}</div>
                <div className='taste-desc'>{shortDescription}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        ) : (
          <div className='row'>
            <div className='col-md-7'>
              <div
                className='macaron-desc-container'
                style={{ textAlign: 'right' }}
              >
                <div className='taste-name'>{name}</div>
                <div className='taste-desc'>{shortDescription}</div>
                <div className='taste-body'>{fullDescription}</div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='macaron-image-container'>
                <img className='taste bottom' src={hoverImageUrl} />
                <img className='taste top' src={imageUrl} />
              </div>
            </div>
            <div className='col-md-1' />
          </div>
        )}
      </div>
    );
  }
}
