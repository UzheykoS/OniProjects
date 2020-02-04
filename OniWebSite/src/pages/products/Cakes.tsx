import React, { useState } from 'react';
import { Nav } from '../../components/Nav';
import { CakeSingle } from '../../components/CakeSingle';
import { Busy } from '../../components/common/Busy';
import { Pages, ProductPages } from '@constants/routes';

export function Cakes() {
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState('0px');

  const onImageLoaded = () => {
    setLoading(false);
    setHeight('auto');
  };

  return (
    <div className='cakes-container'>
      <Nav tab={Pages.Products} subTab={ProductPages.Cakes} />
      <div className='cakes-header'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='header-main'>Торты</div>
            {/* <div className='header-desc'>Очень вкусные дессерты</div> */}
            <div className='header-body'>
              Нас часто спрашивают: 'Какой торт у Вас самый вкусный? Какой
              посоветуете?'. И это, пожалуй, самый сложный вопрос. Мы создавали
              наше меню с одной главной целью - каждый должен найти здесь что-то
              для себя. Все рецептуры разработаны исходя из 4 основных
              принципов: 100% натуральный состав, сочетаемость вкусов и текстур,
              баланс сладости и минималистичный декор, от которого получаешь
              эстетическое наслаждение.
              <br />
              <br />
              Наши торты представлены в двух стандартных размерах. Декор каждого
              из них тщательно продуман и не может быть изменён. Обязательно
              свяжитесь с нами, чтобы уточнить наличие торта и детали заказа
              (доставка возможна день в день). Для заказа торта нестандартных
              размеров/дизайна свяжитесь с нами и мы предоставим Вам всю
              необходимую информацию.
            </div>
          </div>
          <div className='col-md-6'>
            <div className='cakes-photo' style={{ height: height }}>
              <img
                src='./images/images_large/cakes/cake_header.jpg'
                onLoad={onImageLoaded}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='cakes-body'>
        <div className='tastes'>Ассортимент</div>
        <CakeSingle
          name='Soul'
          shortDescription='Для любителей вечной классики и беспроигрышных сочетаний'
          fullDescription='Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом.'
          priceSmall='800'
          priceLarge='1000'
          weightSmall='1200 г'
          weightLarge='1600 г'
          fullCakeOnTheLeft={false}
          imageSmallUrl='/images/images_large/cakes/cut1.jpg'
          imageLargeUrl='/images/images_large/cakes/cake1.jpg'
          paddingTop='14vh'
        />
        <CakeSingle
          name='Carrot Cake'
          shortDescription='Морковный торт, ломающий гастрономические стереотипы'
          fullDescription='Хрустящий миндальный слой с корицей, морковный бисквит с грецким орехом и апельсином, конфи из моркови и мандарина, мусс с филадельфией и мягким козьим сыром.'
          priceSmall='800'
          priceLarge='1000'
          weightSmall='1200 г'
          weightLarge='1600 г'
          fullCakeOnTheLeft={true}
          imageSmallUrl='/images/images_large/cakes/cut2.jpg'
          imageLargeUrl='/images/images_large/cakes/cake2.jpg'
          paddingTop='16vh'
        />
        <CakeSingle
          name='Pink'
          shortDescription='Легкий торт с ярко выраженной кислинкой'
          fullDescription='Фисташковый бисквит дакуаз, клубничное конфи, кремю с лаймом, легкий грейпфрутовый мусс.'
          priceSmall='800'
          priceLarge='1000'
          weightSmall='1200 г'
          weightLarge='1600 г'
          fullCakeOnTheLeft={false}
          imageSmallUrl='/images/images_large/cakes/cut3.jpg'
          imageLargeUrl='/images/images_large/cakes/cake3.jpg'
          paddingTop='19vh'
        />
        <CakeSingle
          name='No Name'
          shortDescription='Насыщенный ореховый вкус с ярким абрикосовым акцентом'
          fullDescription='Хрустящий миндально-фундучный слой, бисквит муалё с фундуком, абрикосовое конфи, мусс с молочным шоколадом и домашним пралине.'
          priceSmall='800'
          priceLarge='1000'
          weightSmall='1200 г'
          weightLarge='1600 г'
          fullCakeOnTheLeft={true}
          imageSmallUrl='/images/images_large/cakes/cut4.jpg'
          imageLargeUrl='/images/images_large/cakes/cake4.jpg'
          paddingTop='22vh'
        />
        <CakeSingle
          name='Rio'
          shortDescription='Идеальная комбинация экзотических фруктов'
          fullDescription='Хрустящий миндальный слой с кокосом, кокосовый бисквит дакуаз с лаймом, карамелизированные бананы с ананасом, легкий мусс с маракуйей.'
          priceSmall='800'
          priceLarge='1000'
          weightSmall='1200 г'
          weightLarge='1600 г'
          fullCakeOnTheLeft={false}
          imageSmallUrl='/images/images_large/cakes/cut5.jpg'
          imageLargeUrl='/images/images_large/cakes/cake5.jpg'
          paddingTop='22vh'
        />
      </div>
      <div className='cakes-footer'>
        <img src='/images/icons/Oni_logo.png' />
      </div>
      <Busy loading={loading} />
    </div>
  );
}
