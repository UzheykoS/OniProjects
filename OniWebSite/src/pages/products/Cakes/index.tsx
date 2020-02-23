import React, { useEffect } from 'react';
import { CakeSingle, CakeSubmitInfo } from '@components/products/CakeSingle';
import { useLoading } from '@hooks/useLoading';
import { CakeTypes, ProductType } from '@constants/products';
import { preloadImages } from '@utils/Helper';
import { useBasket } from '@hooks/useBasket';
import { CakesWrapper, CakesInfo, CakesMenuWrapper } from './styled';
import { FlexRow, FlexColumn } from '@styles/styled';
import { Typography } from '@material-ui/core';

export function Cakes() {
  const { showLoading, closeLoading } = useLoading();
  const { addToBasket } = useBasket();

  const loadImages = async () => {
    await preloadImages([
      '/images/pages/cakes/soul.jpg',
      '/images/pages/cakes/soul_cut.jpg',
      '/images/pages/cakes/pink.jpg',
      '/images/pages/cakes/pink_cut.jpg',
      '/images/pages/cakes/rio.jpg',
      '/images/pages/cakes/rio_cut.jpg',
      '/images/pages/cakes/carrot.jpg',
      '/images/pages/cakes/carrot_cut.jpg',
      '/images/pages/cakes/infinity.jpg',
      '/images/pages/cakes/infinity_cut.jpg',
    ]);

    closeLoading();
  };

  useEffect(() => {
    showLoading();
    loadImages();
  }, []);

  const handleCakeAdd = (info: CakeSubmitInfo, type: CakeTypes) => {
    addToBasket({
      quantity: info.quantity,
      name: '',
      imageUrl: '',
      type:
        type === CakeTypes.Carrot
          ? ProductType.CarrotCakeLarge
          : ProductType.RioLarge,
    });
  };

  return (
    <CakesWrapper>
      <FlexRow>
        <FlexColumn style={{ flexGrow: 1, flexShrink: 2 }}>
          <Typography
            variant='h3'
            style={{ whiteSpace: 'nowrap', marginRight: '100px' }}
          >
            НАША ПРОДУКЦИЯ
          </Typography>
        </FlexColumn>
        <FlexColumn style={{ flexGrow: 2 }}>
          <CakesInfo>
            <Typography
              variant='body1'
              style={{ lineHeight: '24px', margin: '0 120px 20px 80px' }}
            >
              Торт – это маленькое пирожное, которое состоит из двух миндальных
              половинок, пропитанных начинкой. Яркий вкус, нежная текстура
              внутри и хрустящая корочка снаружи.
            </Typography>
          </CakesInfo>
        </FlexColumn>
      </FlexRow>
      <CakesMenuWrapper>
        <CakeSingle
          name='Soul'
          shortDescription='Для любителей вечной классики и беспроигрышных сочетаний'
          fullDescription='Лёгкий шоколадный бисквит без муки, кремю с мадагаскарской ванилью, малиновое конфи, мусс c чёрным шоколадом.'
          priceSmall={800}
          priceLarge={1200}
          weightSmall={1.2}
          weightLarge={1.6}
          diameterSmall={16}
          diameterLarge={21}
          personsSmall={'5-6'}
          personsLarge={'7-8'}
          imageUrl='/images/pages/cakes/soul.jpg'
          imageCutUrl='/images/pages/cakes/soul_cut.jpg'
          onClick={info => handleCakeAdd(info, CakeTypes.Soul)}
        />
        <CakeSingle
          name='Carrot Cake'
          shortDescription='Морковный торт, ломающий гастрономические стереотипы'
          fullDescription='Хрустящий миндальный слой с корицей, морковный бисквит с грецким орехом и апельсином, конфи из моркови и мандарина, мусс с филадельфией и мягким козьим сыром.'
          priceSmall={800}
          priceLarge={1200}
          weightSmall={1.2}
          weightLarge={1.6}
          diameterSmall={16}
          diameterLarge={21}
          personsSmall={'5-6'}
          personsLarge={'7-8'}
          imageUrl='/images/pages/cakes/carrot.jpg'
          imageCutUrl='/images/pages/cakes/carrot_cut.jpg'
          onClick={info => handleCakeAdd(info, CakeTypes.Carrot)}
        />
        <CakeSingle
          name='Pink'
          shortDescription='Легкий торт с ярко выраженной кислинкой'
          fullDescription='Фисташковый бисквит дакуаз, клубничное конфи, кремю с лаймом, легкий грейпфрутовый мусс.'
          priceSmall={800}
          priceLarge={1200}
          weightSmall={1.2}
          weightLarge={1.6}
          diameterSmall={16}
          diameterLarge={21}
          personsSmall={'5-6'}
          personsLarge={'7-8'}
          imageUrl='/images/pages/cakes/pink.jpg'
          imageCutUrl='/images/pages/cakes/pink_cut.jpg'
          onClick={info => handleCakeAdd(info, CakeTypes.Pink)}
        />
        <CakeSingle
          name='Infinity'
          shortDescription='Насыщенный ореховый вкус с ярким абрикосовым акцентом'
          fullDescription='Хрустящий миндально-фундучный слой, бисквит муалё с фундуком, абрикосовое конфи, мусс с молочным шоколадом и домашним пралине.'
          priceSmall={800}
          priceLarge={1200}
          weightSmall={1.2}
          weightLarge={1.6}
          diameterSmall={16}
          diameterLarge={21}
          personsSmall={'5-6'}
          personsLarge={'7-8'}
          imageUrl='/images/pages/cakes/infinity.jpg'
          imageCutUrl='/images/pages/cakes/infinity_cut.jpg'
          onClick={info => handleCakeAdd(info, CakeTypes.Infinity)}
        />
        <CakeSingle
          name='Rio'
          shortDescription='Идеальная комбинация экзотических фруктов'
          fullDescription='Хрустящий миндальный слой с кокосом, кокосовый бисквит дакуаз с лаймом, карамелизированные бананы с ананасом, легкий мусс с маракуйей.'
          priceSmall={800}
          priceLarge={1200}
          weightSmall={1.2}
          weightLarge={1.6}
          diameterSmall={16}
          diameterLarge={21}
          personsSmall={'5-6'}
          personsLarge={'7-8'}
          imageUrl='/images/pages/cakes/rio.jpg'
          imageCutUrl='/images/pages/cakes/rio_cut.jpg'
          onClick={info => handleCakeAdd(info, CakeTypes.Rio)}
        />
      </CakesMenuWrapper>
    </CakesWrapper>
  );
}
