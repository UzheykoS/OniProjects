import React from 'react';
import { MacaronSingle } from '../../components/MacaronSingle';

export function Macarons() {
  return (
    <div className='macarons-container'>
      <div className='macarons-body'>
        <div className='macarons-header'>
          <div className='macarons-info'>
            <div className='title'>Макарон</div>
            <div className='description'>
              Макарон – это маленькое пирожное, которое состоит из двух
              миндальных половинок, пропитанных начинкой. Яркий вкус, нежная
              текстура внутри и хрустящая корочка снаружи. У нас можно выбрать
              любые вкусы из меню и сформировать свой набор на 6, 12 или 24
              макарон.
            </div>
          </div>

          <div className='macarons-mix-section'>
            <div className='macarons-mix-photo'>
              <img src='./images/images_large/macarons/mac_small.jpg' />
            </div>
            <div className='single-section-info'>
              <div className='price'>
                <div className='value'>168</div>
                <div className='currency'> грн</div>
              </div>
              <div className='quantity'>
                <div>6 шт</div>
              </div>
            </div>
          </div>

          <div className='macarons-mix-section'>
            <div className='macarons-mix-photo'>
              <img src='./images/images_large/macarons/mac_medium.jpg' />
            </div>
            <div className='single-section-info'>
              <div className='price'>
                <div className='value'>336</div>
                <div className='currency'> грн</div>
              </div>
              <div className='quantity'>
                <div>12 шт</div>
              </div>
            </div>
          </div>

          <div className='macarons-mix-section'>
            <div className='macarons-mix-photo'>
              <img src='./images/images_large/macarons/mac_large.jpg' />
            </div>
            <div className='single-section-info'>
              <div className='price'>
                <div className='value'>672</div>
                <div className='currency'> грн</div>
              </div>
              <div className='quantity'>
                <div>24 шт</div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <MacaronSingle
              name='Малина'
              shortDescription=''
              fullDescription='Двойная начинка на основе натурального пюре малины с ярким малиновым центром'
              imageOnTheLeft={true}
              hoverImageUrl='./images/images_large/macarons/macaron1_hover.jpg'
              imageUrl='./images/images_large/macarons/macaron1.jpg'
            />
          </div>
          <div className='col-md-6'>
            <MacaronSingle
              name='Манго-Маракуйя'
              shortDescription=''
              fullDescription='Двойная начинка на основе натурального пюре манго и маракуйи с ярким центром манго-маракуйя'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/macarons/macaron2.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron2_hover.jpg'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <MacaronSingle
              name='Фисташка'
              shortDescription=''
              fullDescription='Начинка на основе натуральной  100% фисташковой пасты без сахара'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/macarons/macaron3.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron3_hover.jpg'
            />
          </div>
          <div className='col-md-6'>
            <MacaronSingle
              name='Дор Блю-Груша'
              shortDescription=''
              fullDescription='Двойная начинка на основе сыра Дор Блю с центром из натурального грушевого пюре'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/macarons/macaron4.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron4_hover.jpg'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <MacaronSingle
              name='Кофе-Солёная карамель'
              shortDescription=''
              fullDescription='Двойная начинка на основе натурального кофе с центром из мягкой соленой карамели'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/macarons/macaron5.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron5_hover.jpg'
            />
          </div>
          <div className='col-md-6'>
            <MacaronSingle
              name='Пармезан-Инжир'
              shortDescription=''
              fullDescription='Двойная начинка на основе сыра Пармезан с центром из натурального пюре инжира'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/macarons/macaron6.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron6_hover.jpg'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <MacaronSingle
              name='Смородина'
              shortDescription=''
              fullDescription='Двойная начинка на основе натурального пюре смородины с ярким смородиновым центром'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/macarons/macaron7.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron7_hover.jpg'
            />
          </div>
          <div className='col-md-6'>
            <MacaronSingle
              name='Шоколад'
              shortDescription=''
              fullDescription='Начинка на основе натурального бельгийского черного шоколада 60%'
              imageOnTheLeft={false}
              imageUrl='./images/images_large/macarons/macaron8.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron8_hover.jpg'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <MacaronSingle
              name='Лаванда-Черника'
              shortDescription=''
              fullDescription='Двойная начинка на основе молочных сливок, настоянных на цветках лаванды, с центром из натурального пюре черники'
              imageOnTheLeft={true}
              imageUrl='./images/images_large/macarons/macaron9.jpg'
              hoverImageUrl='./images/images_large/macarons/macaron9_hover.jpg'
            />
          </div>
          <div className='col-md-6'></div>
        </div>
      </div>
      <div className='macarons-footer'>
        <img src='/images/icons/Oni_logo.png' />
      </div>
    </div>
  );
}
