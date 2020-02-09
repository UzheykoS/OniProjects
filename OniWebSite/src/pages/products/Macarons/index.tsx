import React from 'react';
import { MacaronSingle } from '../../../components/MacaronSingle';
import { Container, Row } from 'react-bootstrap';
import {
  MacaronsWrapper,
  MacaronsHeader,
  Column,
  MacaronsMixSection,
  MacaronsInfo,
} from './styled';

export function Macarons() {
  return (
    <Container fluid>
      <Row className={'justify-content-md-center'}>
        <Column md={{ span: 8, offset: 2 }}>
          <MacaronsWrapper>
            <MacaronsHeader>
              <Row>
                <Column md={'auto'}>
                  <MacaronsInfo>
                    <div className='title'>Макарон</div>
                    <div className='description'>
                      Макарон – это маленькое пирожное, которое состоит из двух
                      миндальных половинок, пропитанных начинкой. Яркий вкус,
                      нежная текстура внутри и хрустящая корочка снаружи. У нас
                      можно выбрать любые вкусы из меню и сформировать свой
                      набор на 6, 12 или 24 макарон.
                    </div>
                  </MacaronsInfo>
                </Column>
              </Row>
              <Row>
                <Column md={'auto'} bordered>
                  <MacaronsMixSection>
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
                  </MacaronsMixSection>
                </Column>
                <Column md={'auto'} bordered>
                  <MacaronsMixSection>
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
                  </MacaronsMixSection>
                </Column>
                <Column md={'auto'} bordered>
                  <MacaronsMixSection>
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
                  </MacaronsMixSection>
                </Column>
              </Row>
            </MacaronsHeader>
            Наши вкусы:
            <Row>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Малина'
                  description='Двойная начинка на основе натурального пюре малины с ярким малиновым центром'
                  hoverImageUrl='./images/images_large/macarons/macaron1_hover.jpg'
                  imageUrl='./images/images_large/macarons/macaron1.jpg'
                />
              </Column>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Манго-Маракуйя'
                  description='Двойная начинка на основе натурального пюре манго и маракуйи с ярким центром манго-маракуйя'
                  imageUrl='./images/images_large/macarons/macaron2.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron2_hover.jpg'
                />
              </Column>
            </Row>
            <Row>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Фисташка'
                  description='Начинка на основе натуральной  100% фисташковой пасты без сахара'
                  imageUrl='./images/images_large/macarons/macaron3.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron3_hover.jpg'
                />
              </Column>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Дор Блю-Груша'
                  description='Двойная начинка на основе сыра Дор Блю с центром из натурального грушевого пюре'
                  imageUrl='./images/images_large/macarons/macaron4.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron4_hover.jpg'
                />
              </Column>
            </Row>
            <Row>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Кофе-Солёная карамель'
                  description='Двойная начинка на основе натурального кофе с центром из мягкой соленой карамели'
                  imageUrl='./images/images_large/macarons/macaron5.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron5_hover.jpg'
                />
              </Column>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Пармезан-Инжир'
                  description='Двойная начинка на основе сыра Пармезан с центром из натурального пюре инжира'
                  imageUrl='./images/images_large/macarons/macaron6.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron6_hover.jpg'
                />
              </Column>
            </Row>
            <Row>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Смородина'
                  description='Двойная начинка на основе натурального пюре смородины с ярким смородиновым центром'
                  imageUrl='./images/images_large/macarons/macaron7.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron7_hover.jpg'
                />
              </Column>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Шоколад'
                  description='Начинка на основе натурального бельгийского черного шоколада 60%'
                  imageUrl='./images/images_large/macarons/macaron8.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron8_hover.jpg'
                />
              </Column>
            </Row>
            <Row>
              <Column md={'auto'} bordered>
                <MacaronSingle
                  name='Лаванда-Черника'
                  description='Двойная начинка на основе молочных сливок, настоянных на цветках лаванды, с центром из натурального пюре черники'
                  imageUrl='./images/images_large/macarons/macaron9.jpg'
                  hoverImageUrl='./images/images_large/macarons/macaron9_hover.jpg'
                />
              </Column>
            </Row>
          </MacaronsWrapper>
        </Column>
      </Row>
    </Container>
  );
}
