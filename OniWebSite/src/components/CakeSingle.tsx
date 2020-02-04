import React from 'react';

interface ICakeSingleProps {
  name: string;
  shortDescription: string;
  fullDescription: string;
  priceSmall: string;
  priceLarge: string;
  weightSmall: string;
  weightLarge: string;
  fullCakeOnTheLeft: boolean;
  imageSmallUrl: string;
  imageLargeUrl: string;
  paddingTop: string;
}

export class CakeSingle extends React.Component<ICakeSingleProps, any> {
  render() {
    const {
      name,
      shortDescription,
      fullDescription,
      priceSmall,
      priceLarge,
      weightSmall,
      weightLarge,
      fullCakeOnTheLeft,
      imageSmallUrl,
      imageLargeUrl,
      paddingTop,
    } = this.props;

    if (fullCakeOnTheLeft) {
      return (
        <div className='cake-single clearfix'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='cake-large-image-wrapper'>
                <img src={imageLargeUrl} />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-7'>
                  <div
                    className='taste-name'
                    style={{ paddingTop: paddingTop }}
                  >
                    {name}
                  </div>
                  <div className='taste-desc'>{shortDescription}</div>
                  <div className='taste-body'>{fullDescription}</div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='cake-info'>
                        <div className='price-small'>
                          <p>
                            <span>{priceSmall}</span>.00
                          </p>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/weight.png' />
                          <span>{weightSmall}</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/diameter.png' />
                          <span>20 см</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/team.png' />
                          <span>7-8</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <div className='cake-info'>
                        <div className='price-large'>
                          <p>
                            <span>{priceLarge}</span>.00
                          </p>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/weight.png' />
                          <span>{weightLarge}</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/diameter.png' />
                          <span>35 см</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/team.png' />
                          <span>10-12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='cake-small-image-wrapper'>
                    <img src={imageSmallUrl} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      );
    } else {
      return (
        <div className='cake-single clearfix'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-5'>
                  <div className='cake-small-image-wrapper'>
                    <img src={imageSmallUrl} />
                  </div>
                </div>
                <div className='col-md-7'>
                  <div
                    className='taste-name'
                    style={{ paddingTop: paddingTop }}
                  >
                    {name}
                  </div>
                  <div className='taste-desc'>{shortDescription}</div>
                  <div className='taste-body'>{fullDescription}</div>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='cake-info'>
                        <div className='price-small'>
                          <p>
                            <span>{priceSmall}</span>.00
                          </p>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/weight.png' />
                          <span>{weightSmall}</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/diameter.png' />
                          <span>20 см</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/team.png' />
                          <span>7-8</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <div className='cake-info'>
                        <div className='price-large'>
                          <p>
                            <span>{priceLarge}</span>.00
                          </p>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/weight.png' />
                          <span>{weightLarge}</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/diameter.png' />
                          <span>35 см</span>
                        </div>
                        <div className='info'>
                          <img src='/images/icons/team.png' />
                          <span>10-12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='cake-large-image-wrapper'>
                <img src={imageLargeUrl} />
              </div>
            </div>
          </div>
          <br />
        </div>
      );
    }
  }
}
