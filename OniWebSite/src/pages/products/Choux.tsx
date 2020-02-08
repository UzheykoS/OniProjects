import React from 'react';
import { ChouxSingle } from '../../components/ChouxSingle';

export function Choux() {
  return (
    <div className='choux-container'>
      <div className='choux-body'>
        <div className='choux-header'>
          <div className='choux-info'>
            <div className='title'>Шу</div>
            <div className='description'>
              Основа пирожного шу – заварное тесто, покрытое тонким хрустящим
              слоем. Внутри – двойная начинка из нежного крема и яркого центра.
              Шу украшены разноцветными кружочками из марципана. У нас можно
              выбрать любые вкусы из меню и сформировать свой набор на 2 или 4
              шу.
            </div>
          </div>

          <div className='choux-mix-section-container'>
            <div className='choux-mix-section'>
              <div className='choux-mix-photo'>
                <img src='./images/images_large/choux/choux_mix_small.jpg' />
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

            <div className='choux-mix-section'>
              <div className='choux-mix-photo'>
                <img src='./images/images_large/choux/choux_mix_large.jpg' />
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
            <ChouxSingle
              name='ФИСТАШКА-АПЕЛЬСИН'
              shortDescription=''
              fullDescription='Крем с натуральной 100% фисташковой пастой и цедрой апельсина в сочетании с конфи из натурального пюре апельсина'
              imageOnTheLeft={true}
              hoverImageUrl='./images/images_large/choux/choux_1_hover.jpg'
              imageUrl='./images/images_large/choux/choux_1.jpg'
            />
          </div>
          <div className='col-md-6'>
            <ChouxSingle
              name='СОЛЁНАЯ КАРАМЕЛЬ'
              shortDescription=''
              fullDescription='Мягкая солёная карамель в сочетании с нежным карамельным кремом'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/choux/choux_2.jpg'
              hoverImageUrl='./images/images_large/choux/choux_2_hover.jpg'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <ChouxSingle
              name='МАЛИНА-ЛИЧИ-РОЗА'
              shortDescription=''
              fullDescription='Крем с натуральным пюре личи и лепестками чайной розы в сочетании с конфи из натурального пюре малины'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/choux/choux_3.jpg'
              hoverImageUrl='./images/images_large/choux/choux_3_hover.jpg'
            />
          </div>
          <div className='col-md-6'>
            <ChouxSingle
              name='ВАНИЛЬ-ПЕРСИК'
              shortDescription=''
              fullDescription='Крем с добавлением натуральных стручков ванили из Мадагаскара в сочетании с конфи из натурального пюре персика'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/choux/choux_4.jpg'
              hoverImageUrl='./images/images_large/choux/choux_4_hover.jpg'
            />
          </div>
        </div>
      </div>
      <div className='choux-footer'>
        <img src='/images/icons/Oni_logo.png' />
      </div>
    </div>
  );
}
