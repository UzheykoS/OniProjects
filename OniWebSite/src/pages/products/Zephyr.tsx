import React from 'react';
import { ZephyrSingle } from '../../components/ZephyrSingle';

export function Zephyr() {
  return (
    <div className='zephyr-container'>
      <div className='zephyr-body'>
        <div className='zephyr-header'>
          <div className='zephyr-info'>
            <div className='title'>Зефир</div>
            <div className='description'>
              Мы разработали рецептуру с пониженным содержанием сахара и готовим
              наш зефир исключительно на основе натуральных фруктовых пюре без
              ароматизаторов и консервантов. У нас можно выбрать любые вкусы из
              меню и сформировать свой набор на 8 или 16 шт.
            </div>
          </div>

          <div className='zephyr-mix-section-container'>
            <div className='zephyr-mix-section'>
              <div className='zephyr-mix-photo'>
                <img src='./images/images_large/zephyr/zephyr_mix_small.jpg' />
              </div>
              <div className='single-section-info'>
                <div className='price'>
                  <div className='value'>80</div>
                  <div className='currency'> грн</div>
                </div>
                <div className='quantity'>
                  <div>2 шт</div>
                </div>
              </div>
            </div>

            <div className='zephyr-mix-section'>
              <div className='zephyr-mix-photo'>
                <img src='./images/images_large/zephyr/zephyr_mix_large.jpg' />
              </div>
              <div className='single-section-info'>
                <div className='price'>
                  <div className='value'>160</div>
                  <div className='currency'> грн</div>
                </div>
                <div className='quantity'>
                  <div>4 шт</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <ZephyrSingle
              name='КЛАССИЧЕСКИЙ ЯБЛОЧНЫЙ'
              fullDescription='Сделан на основе натурального пюре запечённого яблока'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/zephyr/zephyr_1.jpg'
            />
          </div>
          <div className='col-md-6'>
            <ZephyrSingle
              name='СМОРОДИНА'
              fullDescription='Сделан на основе натурального пюре чёрной смородины'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/zephyr/zephyr_2.jpg'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <ZephyrSingle
              name='КЛУБНИКА-КЛЮКВА'
              fullDescription='Сделан на основе натурального пюре клубники и клюквы'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/zephyr/zephyr_3.jpg'
            />
          </div>
          <div className='col-md-6'>
            <ZephyrSingle
              name='АБРИКОС-МАРАКУЙЯ'
              fullDescription='Сделан на основе натурального пюре абрикоса и маракуйи'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/zephyr/zephyr_4.jpg'
            />
          </div>
        </div>
      </div>
      <div className='zephyr-footer'>
        <img src='/images/icons/Oni_logo.png' />
      </div>
    </div>
  );
}
